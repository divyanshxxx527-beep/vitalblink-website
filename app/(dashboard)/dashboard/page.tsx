'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Users, Crown, Shield, Zap, Activity, TrendingUp, BarChart3, Settings } from 'lucide-react';
import Link from 'next/link';

type ActionState = {
  error?: string;
  success?: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function SubscriptionSkeleton() {
  return (
    <Card className="mb-8 h-[140px]">
      <CardHeader>
        <CardTitle>Team Subscription</CardTitle>
      </CardHeader>
    </Card>
  );
}

function ManageSubscription() {
  const { data: teamData } = useSWR<TeamDataWithMembers>('/api/team', fetcher);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50">
      <CardHeader className="border-b border-indigo-100 bg-white/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">💳</span>
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">Team Subscription</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500">Current Plan:</span>
                <span className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-bold shadow-md">
                  {teamData?.planName || 'Free'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${teamData?.subscriptionStatus === 'active' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <p className="text-sm text-gray-600">
                  {teamData?.subscriptionStatus === 'active'
                    ? 'Billed monthly'
                    : teamData?.subscriptionStatus === 'trialing'
                      ? 'Trial period'
                      : 'No active subscription'}
                </p>
              </div>
            </div>
            <form action={customerPortalAction}>
              <Button
                type="submit"
                variant="outline"
                className="bg-white hover:bg-indigo-50 border-2 border-indigo-300 text-indigo-700 hover:border-indigo-500 font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >
                Manage Subscription
              </Button>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamMembersSkeleton() {
  return (
    <Card className="mb-8 h-[140px]">
      <CardHeader>
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="animate-pulse space-y-4 mt-1">
          <div className="flex items-center space-x-4">
            <div className="size-8 rounded-full bg-gray-200"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-3 w-14 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TeamMembers() {
  const { data: teamData } = useSWR<TeamDataWithMembers>('/api/team', fetcher);
  const [removeState, removeAction, isRemovePending] = useActionState<
    ActionState,
    FormData
  >(removeTeamMember, {});

  const getUserDisplayName = (user: Pick<User, 'id' | 'name' | 'email'>) => {
    return user.name || user.email || 'Unknown User';
  };

  if (!teamData?.teamMembers?.length) {
    return (
      <Card className="shadow-lg border-2 border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50">
        <CardHeader className="border-b border-cyan-100 bg-white/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
              <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">👥</span>
              </div>
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">Team Members</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">👥</span>
            </div>
            <p className="text-gray-500 font-medium">No team members yet.</p>
            <p className="text-sm text-gray-400 mt-2">Invite your first team member below</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50">
      <CardHeader className="border-b border-cyan-100 bg-white/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900">Team Members</CardTitle>
            <p className="text-sm text-gray-600 mt-1">{teamData.teamMembers.length} member{teamData.teamMembers.length > 1 ? 's' : ''}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-4">
          {teamData.teamMembers.map((member, index) => (
            <li key={member.id} className="group flex items-center justify-between p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-cyan-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12 ring-2 ring-cyan-200 ring-offset-2">
                  <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-lg">
                    {getUserDisplayName(member.user)
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    {getUserDisplayName(member.user)}
                  </p>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold capitalize mt-1 ${member.role === 'owner'
                    ? 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border border-amber-200'
                    : 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-200'
                    }`}>
                    {member.role === 'owner' ? '👑' : '👤'} {member.role}
                  </span>
                </div>
              </div>
              {index > 1 ? (
                <form action={removeAction}>
                  <input type="hidden" name="memberId" value={member.id} />
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    disabled={isRemovePending}
                    className="border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    {isRemovePending ? 'Removing...' : 'Remove'}
                  </Button>
                </form>
              ) : null}
            </li>
          ))}
        </ul>
        {removeState?.error && (
          <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
            <p className="text-red-600 font-medium text-sm">{removeState.error}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function InviteTeamMemberSkeleton() {
  return (
    <Card className="h-[260px]">
      <CardHeader>
        <CardTitle>Invite Team Member</CardTitle>
      </CardHeader>
    </Card>
  );
}

function InviteTeamMember() {
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const isOwner = user?.role === 'owner';
  const [inviteState, inviteAction, isInvitePending] = useActionState<
    ActionState,
    FormData
  >(inviteTeamMember, {});

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-green-50">
      <CardHeader className="border-b border-emerald-100 bg-white/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl blur-lg opacity-50"></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <PlusCircle className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-xl font-bold text-gray-900">Invite Team Member</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <form action={inviteAction} className="space-y-5">
          <div>
            <Label htmlFor="email" className="mb-2 text-gray-700 font-semibold text-sm">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="colleague@example.com"
              required
              disabled={!isOwner}
              className="mt-2 border-2 border-gray-200 focus:border-emerald-400 rounded-lg px-4 py-2.5 text-gray-900 placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
          <div>
            <Label className="text-gray-700 font-semibold text-sm mb-3 block">Select Role</Label>
            <RadioGroup
              defaultValue="member"
              name="role"
              className="flex space-x-6"
              disabled={!isOwner}
            >
              <div className="flex items-center space-x-3 p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-emerald-300 transition-colors duration-200 flex-1">
                <RadioGroupItem value="member" id="member" className="text-emerald-600" />
                <Label htmlFor="member" className="cursor-pointer font-medium text-gray-700">
                  👤 Member
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white border-2 border-gray-200 rounded-lg hover:border-emerald-300 transition-colors duration-200 flex-1">
                <RadioGroupItem value="owner" id="owner" className="text-emerald-600" />
                <Label htmlFor="owner" className="cursor-pointer font-medium text-gray-700">
                  👑 Owner
                </Label>
              </div>
            </RadioGroup>
          </div>
          {inviteState?.error && (
            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <p className="text-red-600 font-medium text-sm flex items-center gap-2">
                <span className="text-lg">⚠️</span> {inviteState.error}
              </p>
            </div>
          )}
          {inviteState?.success && (
            <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg">
              <p className="text-emerald-600 font-medium text-sm flex items-center gap-2">
                <span className="text-lg">✅</span> {inviteState.success}
              </p>
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isInvitePending || !isOwner}
          >
            {isInvitePending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending Invitation...
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-5 w-5" />
                Send Invitation
              </>
            )}
          </Button>
        </form>
      </CardContent>
      {!isOwner && (
        <CardFooter className="bg-amber-50 border-t-2 border-amber-200">
          <div className="flex items-start gap-3 p-2">
            <span className="text-2xl">🔒</span>
            <p className="text-sm text-amber-700 font-medium">
              Only team owners can invite new members. Contact your team owner to get invitation access.
            </p>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

export default function SettingsPage() {
  return (
    <section className="flex-1 p-4 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Team Settings</h1>
          </div>
          <p className="text-gray-600 ml-7">Manage your team subscription and members</p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          <Suspense fallback={<SubscriptionSkeleton />}>
            <ManageSubscription />
          </Suspense>
          <Suspense fallback={<TeamMembersSkeleton />}>
            <TeamMembers />
          </Suspense>
          <Suspense fallback={<InviteTeamMemberSkeleton />}>
            <InviteTeamMember />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
