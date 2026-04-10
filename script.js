// --- State Variables ---
let is12HourFormat = false; 
let currentTimezone = 'local'; 
let currentLocale = 'en-US'; 
let isDarkMode = false; 
let isAnalogMode = false; 

// --- Translations Dictionary ---
const translations = {
    'en-US': { 
        title: 'DigitalClock', about: 'About', howTo: 'How to Use', analog: 'Analog', digital: 'Digital', local: '📍 Local', localMenu: 'Local Time',
        clock: 'Clock', alarm: 'Alarm', stopwatch: 'Stopwatch', setAlarm: 'Set Alarm', start: 'Start', stop: 'Stop', reset: 'Reset',
        introHeading: 'Why Choose Our Digital Clock?',
        introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.',
        introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        featuresHeading: 'Key Features of Our Digital Clock',
        feat1Title: 'Accurate Time Display', feat1Desc: 'Our digital clock provides precise, real-time updates, ensuring you always have the correct time at your fingertips.',
        feat2Title: 'Multiple Time Formats', feat2Desc: 'Easily switch between 12-hour and 24-hour time formats to suit your preference and needs.',
        feat3Title: 'Customizable Interface', feat3Desc: 'Personalize your digital clock with various fonts, colors, and background options for a unique look.',
        feat4Title: 'Global Time Zones', feat4Desc: 'Access multiple time zones simultaneously, perfect for international business or keeping track of loved ones abroad.',
        feat5Title: 'Full-Screen Mode', feat5Desc: 'Utilize our full-screen feature for enhanced visibility during presentations or as a large display clock.',
        feat6Title: 'Analog Clock Display', feat6Desc: 'Switch between digital and analog clock displays, offering a classic timekeeping experience alongside modern digital precision.',
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say',
        review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!',
        review2: 'The large numbers are easy to read even from across the room.',
        review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.',
        quickLinks: 'Quick Links', service: 'Service', contact: 'Contact',
        privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service',
        copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'es-ES': { title: 'Reloj Digital', about: 'Acerca de', howTo: 'Cómo usar', analog: 'Analógico', digital: 'Digital', local: '📍 Local', localMenu: 'Hora Local', clock: 'Reloj', alarm: 'Alarma', stopwatch: 'Cronómetro', setAlarm: 'Añadir Alarma', start: 'Iniciar', stop: 'Detener', reset: 'Reiniciar',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'fr-FR': { title: 'Horloge Numérique', about: 'À propos', howTo: 'Comment utiliser', analog: 'Analogique', digital: 'Numérique', local: '📍 Locale', localMenu: 'Heure Locale', clock: 'Horloge', alarm: 'Alarme', stopwatch: 'Chronomètre', setAlarm: 'Régler l\'alarme', start: 'Démarrer', stop: 'Arrêter', reset: 'Réinitialiser',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'de-DE': { title: 'DigitalUhr', about: 'Über uns', howTo: 'Verwendung', analog: 'Analog', digital: 'Digital', local: '📍 Lokal', localMenu: 'Ortszeit', clock: 'Uhr', alarm: 'Wecker', stopwatch: 'Stoppuhr', setAlarm: 'Wecker stellen', start: 'Start', stop: 'Stopp', reset: 'Zurücksetzen',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'pt-BR': { title: 'Relógio Digital', about: 'Sobre', howTo: 'Como Usar', analog: 'Analógico', digital: 'Digital', local: '📍 Local', localMenu: 'Hora Local', clock: 'Relógio', alarm: 'Alarme', stopwatch: 'Cronômetro', setAlarm: 'Definir Alarme', start: 'Iniciar', stop: 'Parar', reset: 'Zerar',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'ru-RU': { title: 'Цифровые Часы', about: 'О нас', howTo: 'Как использовать', analog: 'Аналоговые', digital: 'Цифровые', local: '📍 Местное', localMenu: 'Местное Время', clock: 'Часы', alarm: 'Будильник', stopwatch: 'Секундомер', setAlarm: 'Установить', start: 'Старт', stop: 'Стоп', reset: 'Сброс',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read даже из другого конца комнаты.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'zh-CN': { title: '数字时钟', about: '关于', howTo: '如何使用', analog: '模拟', digital: '数字', local: '📍 本地', localMenu: '本地时间', clock: '时钟', alarm: '闹钟', stopwatch: '秒表', setAlarm: '设置闹钟', start: '开始', stop: '停止', reset: '重置',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'ja-JP': { title: 'デジタル時計', about: 'について', howTo: '使い方', analog: 'アナログ', digital: 'デジタル', local: '📍 現地', localMenu: '現地時間', clock: '時計', alarm: 'アラーム', stopwatch: 'ストップウォッチ', setAlarm: 'アラーム設定', start: 'スタート', stop: 'ストップ', reset: 'リセット',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'hi-IN': { title: 'डिजिटल घड़ी', about: 'के बारे में', howTo: 'कैसे उपयोग करें', analog: 'एनालॉग', digital: 'डिजिटल', local: '📍 स्थानीय', localMenu: 'स्थानीय समय', clock: 'घड़ी', alarm: 'अलार्म', stopwatch: 'स्टॉपवॉच', setAlarm: 'अलार्म सेट करें', start: 'शुरू', stop: 'रुकें', reset: 'रीसेट',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    },
    'bn-IN': { title: 'ডিজিটাল ঘড়ি', about: 'সম্পর্কে', howTo: 'ব্যবহার বিধি', analog: 'অ্যানালগ', digital: 'ডিজিটাল', local: '📍 স্থানীয়', localMenu: 'স্থানীয় সময়', clock: 'ঘড়ি', alarm: 'অ্যালার্ম', stopwatch: 'স্টপওয়াচ', setAlarm: 'অ্যালার্ম সেট করুন', start: 'শুরু', stop: 'থামুন', reset: 'রিসেট',
        introHeading: 'Why Choose Our Digital Clock?', introPara1: 'Our digital clock is a precise, user-friendly timekeeping tool that displays the current time in a clear, numerical format. Unlike traditional analog clocks, our digital clock offers easy-to-read time representation, showing hours, minutes, and seconds with utmost accuracy.', introPara2: "Designed for both personal and professional use, our digital clock combines functionality with customization options. It features adjustable time zones, various display formats, and personalization settings to suit your specific needs. Whether you're managing your daily schedule, coordinating across time zones, or simply need a reliable timekeeping solution, our digital clock is the perfect choice for accurate and convenient time management.",
        howTo1Title: 'Access Our Digital Clock', howTo1Desc: 'Visit our website to instantly view and interact with our feature-rich digital clock interface.',
        howTo2Title: 'Customize Your Clock', howTo2Desc: 'Explore our wide range of customization options to personalize your digital clock experience.',
        howTo3Title: 'Set Your Time Zone', howTo3Desc: 'Choose your preferred time zone and display format for accurate, localized timekeeping.',
        howTo4Title: 'Enjoy Precise Timekeeping', howTo4Desc: 'Benefit from our digital clock\'s accuracy and additional features for all your time management needs.',
        testimonialsHeading: 'What Our Users Say', review1: 'As a remote worker, this digital clock has been so handy for tracking time zones!', review2: 'The large numbers are easy to read even from across the room.', review3: 'Very helpful and well designed.',
        footerTagline: 'Precise, customizable timekeeping for your every need.', quickLinks: 'Quick Links', service: 'Service', contact: 'Contact', privacyPolicy: 'Privacy Policy', termsOfService: 'Terms of Service', copyright: '© 2026 DigitalClock. All rights reserved.'
    }
};

// Function to apply translated text to the UI
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLocale] && translations[currentLocale][key]) {
            el.textContent = translations[currentLocale][key];
        }
    });
}

// --- Initialize Analog Clock Face ---
function initAnalogFace() {
    const face = document.getElementById('clock-face');
    if (!face) return;
    face.innerHTML = ''; 

    for (let i = 1; i <= 12; i++) {
        const tickContainer = document.createElement('div');
        tickContainer.className = 'tick-container';
        tickContainer.style.transform = `rotate(${i * 30}deg)`;
        const tick = document.createElement('div');
        tick.className = 'clock-tick';
        tickContainer.appendChild(tick);
        face.appendChild(tickContainer);

        const numContainer = document.createElement('div');
        numContainer.className = 'clock-num-container';
        numContainer.style.transform = `rotate(${i * 30}deg)`;
        const num = document.createElement('div');
        num.className = 'clock-num';
        num.style.transform = `rotate(-${i * 30}deg)`;
        num.textContent = i;
        numContainer.appendChild(num);
        face.appendChild(numContainer);
    }
}
initAnalogFace();

// --- Alarm Logic Setup ---
let alarms = [];
const alarmInput = document.getElementById('alarm-input');
const btnSetAlarm = document.getElementById('btn-set-alarm');
const alarmList = document.getElementById('alarm-list');

if (btnSetAlarm) {
    btnSetAlarm.addEventListener('click', () => {
        const time = alarmInput.value;
        if (time && !alarms.includes(time)) {
            alarms.push(time);
            renderAlarms();
        }
    });
}

function renderAlarms() {
    alarmList.innerHTML = '';
    alarms.forEach(time => {
        const li = document.createElement('li');
        li.className = 'alarm-item';
        li.innerHTML = `<span>${time}</span> <button class="btn btn-delete-alarm" data-time="${time}">X</button>`;
        alarmList.appendChild(li);
    });
    
    document.querySelectorAll('.btn-delete-alarm').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const timeToRemove = e.target.getAttribute('data-time');
            alarms = alarms.filter(t => t !== timeToRemove);
            renderAlarms();
        });
    });
}

// --- ASYNC Clock Logic from Backend WITH FALLBACK ---
async function updateClock() {
    let hours, minutes, seconds, now;

    try {
        // Build the correct timezone string for the API call
        let tzParam = currentTimezone === 'local' ? Intl.DateTimeFormat().resolvedOptions().timeZone : currentTimezone;
        
        // Fetch the JSON payload from your Java backend
        const response = await fetch(`http://localhost:8080/api/time?timezone=${tzParam}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json(); 
        
        hours = data.hours;
        minutes = data.minutes;
        seconds = data.seconds;
        
        // BUG FIX: Construct the date using exact integers from Java to prevent formatting conflicts
        // Note: data.month - 1 is needed because JavaScript months are 0-indexed (0=Jan, 11=Dec)
        now = new Date(data.year, data.month - 1, data.day, data.hours, data.minutes, data.seconds);
        
    } catch (error) {
        // FALLBACK: If the Java backend is off, use the browser's local computer time
        now = new Date();
        if (currentTimezone !== 'local') {
            const targetTimeStr = now.toLocaleString('en-US', { timeZone: currentTimezone });
            now = new Date(targetTimeStr);
        }
        hours = now.getHours();
        minutes = now.getMinutes();
        seconds = now.getSeconds();
    }

    // Check Alarms
    let currentHM = `${hours < 10 ? '0'+hours : hours}:${minutes < 10 ? '0'+minutes : minutes}`;
    if (alarms.includes(currentHM) && seconds === 0) {
        alert(`${translations[currentLocale]['alarm']}! ${currentHM}`);
    }

    // --- Update Digital Clock ---
    let ampmStr = '';
    let displayHours = hours;

    if (is12HourFormat) {
        const ampm = displayHours >= 12 ? 'PM' : 'AM';
        displayHours = displayHours % 12;
        displayHours = displayHours ? displayHours : 12; 
        ampmStr = `<span style="font-size: 12rem; font-weight: 500; margin-left: 20px;">${ampm}</span>`;
    } else {
        displayHours = displayHours < 10 ? '0' + displayHours : displayHours;
    }

    let displayMins = minutes < 10 ? '0' + minutes : minutes;
    let displaySecs = seconds < 10 ? '0' + seconds : seconds;

    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.innerHTML = `${displayHours}:${displayMins}:${displaySecs}${ampmStr}`;
    }

    // --- Update Analog Clock ---
    if (isAnalogMode) {
        const hrHand = document.getElementById('hour-hand');
        const minHand = document.getElementById('min-hand');
        const secHand = document.getElementById('sec-hand');

        const secAngle = seconds * 6; 
        const minAngle = (minutes * 6) + (seconds * 0.1); 
        const hrAngle = ((hours % 12) * 30) + (minutes * 0.5); 

        if(secHand) secHand.style.transform = `rotate(${secAngle}deg)`;
        if(minHand) minHand.style.transform = `rotate(${minAngle}deg)`;
        if(hrHand) hrHand.style.transform = `rotate(${hrAngle}deg)`;
    }

    // --- Update Date ---
    const dateElement = document.getElementById('date');
    if (dateElement) {
        const dateOptions = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
        const formattedDate = now.toLocaleDateString(currentLocale, dateOptions).toUpperCase();
        dateElement.textContent = formattedDate;
    }
}

// Initial Calls
applyTranslations();
updateClock();
setInterval(updateClock, 1000); 

// --- View Switching Logic ---
const btnTabClock = document.getElementById('btn-tab-clock');
const btnTabAlarm = document.getElementById('btn-tab-alarm');
const btnTabStopwatch = document.getElementById('btn-tab-stopwatch');
const clockView = document.getElementById('clock-view');
const alarmView = document.getElementById('alarm-view');
const stopwatchView = document.getElementById('stopwatch-view');
const btnToggleClock = document.getElementById('btn-toggle-clock');

function switchView(view) {
    if(clockView) clockView.style.display = 'none';
    if(alarmView) alarmView.style.display = 'none';
    if(stopwatchView) stopwatchView.style.display = 'none';
    
    if(btnTabClock) btnTabClock.classList.remove('active');
    if(btnTabAlarm) btnTabAlarm.classList.remove('active');
    if(btnTabStopwatch) btnTabStopwatch.classList.remove('active');
    
    if (view === 'clock') {
        if(clockView) clockView.style.display = 'flex';
        if(btnTabClock) btnTabClock.classList.add('active');
        if(btnToggleClock) btnToggleClock.style.display = 'inline-flex';
    } else if (view === 'alarm') {
        if(alarmView) alarmView.style.display = 'flex';
        if(btnTabAlarm) btnTabAlarm.classList.add('active');
        if(btnToggleClock) btnToggleClock.style.display = 'none';
    } else if (view === 'stopwatch') {
        if(stopwatchView) stopwatchView.style.display = 'flex';
        if(btnTabStopwatch) btnTabStopwatch.classList.add('active');
        if(btnToggleClock) btnToggleClock.style.display = 'none';
    }
}

if (btnTabClock && btnTabAlarm && btnTabStopwatch) {
    btnTabClock.addEventListener('click', () => switchView('clock'));
    btnTabAlarm.addEventListener('click', () => switchView('alarm'));
    btnTabStopwatch.addEventListener('click', () => switchView('stopwatch'));
}

// --- Toggle Digital / Analog Mode ---
const digitalClockElement = document.getElementById('time');
const analogClockElement = document.getElementById('analog-clock');

if (btnToggleClock) {
    btnToggleClock.addEventListener('click', () => {
        isAnalogMode = !isAnalogMode;
        if (isAnalogMode) {
            if(digitalClockElement) digitalClockElement.style.display = 'none';
            if(analogClockElement) analogClockElement.style.display = 'block';
            btnToggleClock.setAttribute('data-i18n', 'digital');
        } else {
            if(digitalClockElement) digitalClockElement.style.display = 'flex';
            if(analogClockElement) analogClockElement.style.display = 'none';
            btnToggleClock.setAttribute('data-i18n', 'analog');
        }
        applyTranslations();
        updateClock();
    });
}

// --- Stopwatch Logic ---
let swStartTime = 0;
let swElapsedTime = 0;
let swInterval;
let isSwRunning = false;

const swDisplay = document.getElementById('stopwatch-time');
const btnSwStart = document.getElementById('btn-sw-start');
const btnSwReset = document.getElementById('btn-sw-reset');

function updateStopwatch() {
    const now = Date.now();
    const diff = now - swStartTime + swElapsedTime;
    
    let m = Math.floor(diff / 60000);
    let s = Math.floor((diff % 60000) / 1000);
    let ms = Math.floor((diff % 1000) / 10); 
    
    m = m < 10 ? '0'+m : m;
    s = s < 10 ? '0'+s : s;
    ms = ms < 10 ? '0'+ms : ms;
    
    if(swDisplay) swDisplay.textContent = `${m}:${s}.${ms}`;
}

if (btnSwStart && btnSwReset) {
    btnSwStart.addEventListener('click', () => {
        if (isSwRunning) {
            clearInterval(swInterval);
            swElapsedTime += Date.now() - swStartTime;
            isSwRunning = false;
            btnSwStart.setAttribute('data-i18n', 'start');
        } else {
            swStartTime = Date.now();
            swInterval = setInterval(updateStopwatch, 10);
            isSwRunning = true;
            btnSwStart.setAttribute('data-i18n', 'stop');
        }
        applyTranslations();
    });

    btnSwReset.addEventListener('click', () => {
        clearInterval(swInterval);
        isSwRunning = false;
        swElapsedTime = 0;
        if(swDisplay) swDisplay.textContent = '00:00.00';
        btnSwStart.setAttribute('data-i18n', 'start');
        applyTranslations();
    });
}

// --- Dark Mode Logic ---
const darkModeBtn = document.getElementById('darkModeBtn');
if (darkModeBtn) {
    darkModeBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeBtn.textContent = '🌙';
        }
    });
}

// --- Full Screen Toggle Logic ---
const btnFullscreen = document.getElementById('btn-fullscreen');
if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable full-screen mode: ${err.message}`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
}

// --- Time Format Toggle Logic ---
const btn12h = document.getElementById('btn-12h');
const btn24h = document.getElementById('btn-24h');

if (btn12h && btn24h) {
    btn12h.addEventListener('click', () => {
        if (!is12HourFormat) {
            is12HourFormat = true;
            btn12h.classList.add('active');
            btn24h.classList.remove('active');
            updateClock(); 
        }
    });

    btn24h.addEventListener('click', () => {
        if (is12HourFormat) {
            is12HourFormat = false;
            btn24h.classList.add('active');
            btn12h.classList.remove('active');
            updateClock();
        }
    });
}

// --- Dropdown Shared Logic ---
function closeOtherDropdowns(exceptMenuId) {
    const menus = ['fontDropdownMenu', 'locationDropdownMenu', 'themeDropdownMenu', 'colorDropdownMenu', 'langDropdownMenu'];
    menus.forEach(menuId => {
        if (menuId !== exceptMenuId) {
            const menuEl = document.getElementById(menuId);
            if(menuEl) menuEl.classList.remove('show');
        }
    });
}

window.addEventListener('click', (e) => {
    const dropdowns = [
        { btn: 'fontDropdownBtn', menu: 'fontDropdownMenu' },
        { btn: 'locationDropdownBtn', menu: 'locationDropdownMenu' },
        { btn: 'themeDropdownBtn', menu: 'themeDropdownMenu' },
        { btn: 'colorDropdownBtn', menu: 'colorDropdownMenu' },
        { btn: 'langDropdownBtn', menu: 'langDropdownMenu' }
    ];

    dropdowns.forEach(dropdown => {
        const btn = document.getElementById(dropdown.btn);
        const menu = document.getElementById(dropdown.menu);
        if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
        }
    });
});

// --- Language Dropdown Logic ---
const langDropdownBtn = document.getElementById('langDropdownBtn');
const langDropdownMenu = document.getElementById('langDropdownMenu');
const langDropdownItems = document.querySelectorAll('.dropdown-item-lang');

if(langDropdownBtn) {
    langDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        langDropdownMenu.classList.toggle('show');
        closeOtherDropdowns('langDropdownMenu');
    });

    langDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            langDropdownItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.check').textContent = '';
            });

            item.classList.add('active');
            item.querySelector('.check').textContent = '✓';

            currentLocale = item.getAttribute('data-lang');
            langDropdownMenu.classList.remove('show');
            
            applyTranslations();
            updateClock(); 
        });
    });
}

// --- Font Dropdown Logic ---
const fontDropdownBtn = document.getElementById('fontDropdownBtn');
const fontDropdownMenu = document.getElementById('fontDropdownMenu');
const dropdownItems = document.querySelectorAll('.dropdown-item');

if(fontDropdownBtn) {
    fontDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        fontDropdownMenu.classList.toggle('show');
        closeOtherDropdowns('fontDropdownMenu');
    });

    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.check').textContent = '';
            });

            item.classList.add('active');
            item.querySelector('.check').textContent = '✓';

            const fontValue = item.getAttribute('data-font');
            const fontName = item.textContent.replace('✓', '').trim();

            const timeEl = document.getElementById('time');
            const swTimeEl = document.getElementById('stopwatch-time');
            const dateEl = document.getElementById('date');
            
            if(timeEl) timeEl.style.fontFamily = fontValue;
            if(swTimeEl) swTimeEl.style.fontFamily = fontValue;
            if(dateEl) dateEl.style.fontFamily = fontValue;
            
            document.documentElement.style.setProperty('--clock-font', fontValue);

            fontDropdownBtn.innerHTML = `T ${fontName}`;
            fontDropdownMenu.classList.remove('show');
        });
    });
}

// --- Location Dropdown Logic ---
const locationDropdownBtn = document.getElementById('locationDropdownBtn');
const locationDropdownMenu = document.getElementById('locationDropdownMenu');
const locationDropdownItems = document.querySelectorAll('.dropdown-item-loc');

if(locationDropdownBtn) {
    locationDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        locationDropdownMenu.classList.toggle('show');
        closeOtherDropdowns('locationDropdownMenu');
    });

    locationDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            locationDropdownItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.check').textContent = '';
            });

            item.classList.add('active');
            item.querySelector('.check').textContent = '✓';

            currentTimezone = item.getAttribute('data-tz');
            let locName = item.textContent.replace('✓', '').trim();
            locName = locName.split('(')[0].trim(); 

            if(currentTimezone === 'local') {
                locationDropdownBtn.innerHTML = `<span data-i18n="local">${translations[currentLocale]['local']}</span>`;
            } else {
                locationDropdownBtn.innerHTML = `📍 ${locName}`;
            }
            
            locationDropdownMenu.classList.remove('show');
            updateClock();
        });
    });
}

// --- Theme/Background Dropdown Logic ---
const themeDropdownBtn = document.getElementById('themeDropdownBtn');
const themeDropdownMenu = document.getElementById('themeDropdownMenu');
const themeDropdownItems = document.querySelectorAll('.dropdown-item-theme');

if(themeDropdownBtn) {
    themeDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        themeDropdownMenu.classList.toggle('show');
        closeOtherDropdowns('themeDropdownMenu');
    });

    themeDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            themeDropdownItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.check').textContent = '';
            });

            item.classList.add('active');
            item.querySelector('.check').textContent = '✓';

            const bgValue = item.getAttribute('data-bg');
            document.body.style.background = bgValue;
            
            if (isDarkMode) {
                isDarkMode = false;
                document.body.classList.remove('dark-mode');
                if(darkModeBtn) darkModeBtn.textContent = '🌙';
            }

            let themeName = item.textContent.replace('✓', '').trim();
            themeDropdownBtn.innerHTML = `☀️ ${themeName}`;
            
            themeDropdownMenu.classList.remove('show');
        });
    });
}

// --- Color Dropdown Logic ---
const colorDropdownBtn = document.getElementById('colorDropdownBtn');
const colorDropdownMenu = document.getElementById('colorDropdownMenu');
const colorDropdownItems = document.querySelectorAll('.dropdown-item-color');

if(colorDropdownBtn) {
    colorDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation(); 
        colorDropdownMenu.classList.toggle('show');
        closeOtherDropdowns('colorDropdownMenu');
    });

    colorDropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            colorDropdownItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.check').textContent = '';
            });

            item.classList.add('active');
            item.querySelector('.check').textContent = '✓';

            const colorValue = item.getAttribute('data-color');
            
            const timeEl = document.getElementById('time');
            const swTimeEl = document.getElementById('stopwatch-time');
            const dateEl = document.getElementById('date');

            if(timeEl) timeEl.style.color = colorValue;
            if(swTimeEl) swTimeEl.style.color = colorValue;
            if(dateEl) dateEl.style.color = colorValue;
            
            document.documentElement.style.setProperty('--clock-color', colorValue);

            let colorName = item.textContent.replace('✓', '').trim();
            colorDropdownBtn.innerHTML = `💧 ${colorName}`;
            
            colorDropdownMenu.classList.remove('show');
        });
    });
}

// --- Zoom Logic ---
const btnZoomIn = document.getElementById('btn-zoom-in');
const btnZoomOut = document.getElementById('btn-zoom-out');
const zoomContainer = document.getElementById('zoom-container');

let currentZoom = 1.0;
const ZOOM_STEP = 0.1;
const MAX_ZOOM = 2.5; 
const MIN_ZOOM = 0.3;  

if (btnZoomIn && btnZoomOut && zoomContainer) {
    btnZoomIn.addEventListener('click', () => {
        if (currentZoom < MAX_ZOOM) {
            currentZoom += ZOOM_STEP;
            zoomContainer.style.transform = `scale(${currentZoom})`;
        }
    });

    btnZoomOut.addEventListener('click', () => {
        if (currentZoom > MIN_ZOOM) {
            currentZoom -= ZOOM_STEP;
            zoomContainer.style.transform = `scale(${currentZoom})`;
        }
    });
}