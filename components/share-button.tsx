'use client';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ShareButtonProps {
    title: string;
    excerpt: string;
}

export function ShareButton({ title, excerpt }: ShareButtonProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleShare = () => {
        if (!isClient) return;
        
        if (navigator?.share) {
            navigator.share({
                title: title,
                text: excerpt,
                url: window.location.href,
            }).catch((error) => {
                if (error?.name !== 'AbortError') {
                    console.error('Error sharing:', error);
                }
            });
        } else {
            // Fallback: Copy to clipboard
            if (navigator?.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        }
    };

    if (!isClient) return null;

    return (
        <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
        </Button>
    );
}
