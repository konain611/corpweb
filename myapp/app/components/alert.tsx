// app/components/CookieConsentBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function CookieConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('cookie_consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookie_consent', 'accepted', { expires: 365 });
        setShowBanner(false);
    };

    const handleReject = () => {
        Cookies.set('cookie_consent', 'rejected', { expires: 365 });
        setShowBanner(false);
    };

    return showBanner ? (
        <div className="fixed bottom-0 left-0 w-full bg-[#003366] text-white p-4 z-50 flex flex-col sm:flex-row justify-between items-center">
            <p className="mb-2 sm:mb-0">We use cookies to improve your experience. You can manage your preferences.</p>
            <div className="flex gap-2">
                <button
                    className="border-2 border-green-600 px-4 py-2 rounded hover:bg-green-600"
                    onClick={handleAccept}
                >
                    Accept
                </button>
                <button
                    className="border-2 border-red-600 px-4 py-2 rounded hover:bg-red-600"
                    onClick={handleReject}
                >
                    Reject
                </button>
            </div>
        </div>
    ) : null;
}