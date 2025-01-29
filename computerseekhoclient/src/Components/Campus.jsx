import { useEffect } from 'react';
import './Campus.css';

export default function Campus() {
    useEffect(() => {
        const images = document.querySelectorAll('.myimg img');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('popup');
                    } else {
                        entry.target.classList.remove('popup');
                    }
                });
            },
            { threshold: 0.5 }
        );

        images.forEach((img) => observer.observe(img));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="campus-container">
            <h1 className="campus-heading">Our Campus Life</h1>
            <div className="myimg">
                <img src="/images/1.jpeg" alt="1" />
                <img src="/images/2.jpg" alt="2" />
                <img src="/images/3.webp" alt="3" />
                <img src="/images/4.jpg" alt="4" />
                <img src="/images/5.jpeg" alt="5" />
                <img src="/images/6.jpeg" alt="6" />
                <img src="/images/7.jpeg" alt="7" />
                <img src="/images/8.jpeg" alt="8" />
            </div>
        </div>
    );
}
