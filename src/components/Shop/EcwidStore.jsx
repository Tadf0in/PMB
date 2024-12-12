import React, { useState, useEffect } from 'react';
import '../../css/shop.css';

export default function EcwidStore() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app.ecwid.com/script.js?110956767&data_platform=code&data_date=2024-12-12';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.xProductBrowser) {
                window.xProductBrowser(
                "categoriesPerRow=3",
                "views=grid(20,3) list(60) table(60)",
                "categoryView=grid",
                "searchView=list",
                "id=my-store-110956767"
                );
            } else {
                console.error("xProductBrowser is not available.");
            }
            setIsLoading(false);
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

  return (<> {isLoading ? 
        <div className="spinner-border m-5" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    :   
        <div id="goodies">
            <div id="my-store-110956767"></div>
        </div>
    }
    </>);
}
