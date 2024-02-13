import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    django,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    python,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Digitrans Edtech",
        company_name: " Cuộc thi DigiTrans Edtech 2022 với chủ đề “Ứng dụng chuyển đổi số trong lĩnh vực giáo dục”",
        icon: "/src/assets/icons/cropped-KDI-Favicon-32x32.png",
        iconBg: "#ffffff",
        linkicon: "https://vutriviet.com",

        date: "Chiều 13/10 năm 2022",
        points: [
            "Công ty CP Giáo dục KDI (KDI Education) cùng nhiều cty khác tổ chức vòng Chung kết Cuộc thi DigiTrans Edtech 2022 đại diện cho tuần lễ Đổi mới sáng tạo và chuyển đổi số TPHCM năm 2022.",
            "Cuộc thi được chia làm bảng A và bảng B, trong đó bảng A (dành cho sinh viên và các dự án start-up công nghệ) và bảng B là (THCS & THPT)",
            "3 đội giành giải nhất trong đó có đội ở bảng B xuất sắc giành giải với dự án:",
            "Web giao nhiệm vụ, quản lý học tập; với bảng THPT có Dự án App học tập Eclass",
        ],
    },
    {
        title: "Tin học trẻ 2022 - 2023",
        company_name: "Cuộc thi Tin học trẻ lớn nhất cả nước",
        linkicon: "https://vutriviet.com",
        icon: "/src/assets/icons/Savio.png",
        iconBg: "#f5f5f5",
        date: "Từ ngày 15/6/2023 - 4/8/2023",
        points: [
            "Cuộc thi bao gồm 4 bảng",
            "Bảng A, B, C1, C2 thi cá nhân từ tiểu học đến THPT về giải thuật toán",
            "Bảng D1, D2 bao gồm các thi sinh từ THCS - THPT làm sản phẩm ứng dụng công nghệ.",
            "Dự án GeniDev của em Vũ Trí Việt và Vũ Đăng Khoa được giải khuyến khích Tin học trẻ quốc gia",
        ],
    },
    {
        title: "NCKH 2023 - 2024",
        linkicon: "https://flatter.onrender.com",
        company_name: "Cuộc thi KHKT cấp thành phố",
        icon: "/src/assets/icons/Logo.png",
        iconBg: "#f5f5f5",
        date: "11/1/2024",
        points: [
            "60 dự án vào vòng chung kết khoa học kỹ thuật TP.HCM",
            "Ông Nguyễn Bảo Quốc, phó giám đốc Sở Giáo dục và Đào tạo TP.HCM, cho hay: 'Số lượng đề tài năm nay giới hạn hơn so với năm trước nhưng chất lượng tốt hơn.'",
            "Công tác chấm thi vòng loại cấp thành phố cũng có nhiều thay đổi. Chúng tôi đã triển khai hai hình thức chấm điểm: qua xét hồ sơ và phỏng vấn (các năm trước chỉ chấm trên hồ sơ)",
            "Sở cũng tiếp tục dùng phần mềm chống đạo văn để lọc ra những đề tài có sự trùng lặp.",
            "Trong lúc này, mình đã dừng chân tại vòng thành phố với giải nhì: Flatter - đồng hành cùng người trầm cảm"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/VietVuDepZai/VietVuDepZai',
    },

];

export const projects = [
    {
        iconUrl: "/src/assets/icons/1414305.png",
        theme: 'btn-back-red',
        name: 'TechnoLearning',
        description: 'Developed a web application that keep track of what you are learning by create a note list for you.',
        link: 'https://technolearning.netlify.app',
    },
    {
        iconUrl: "/src/assets/icons/fix.png",
        theme: 'btn-back-blue',
        name: 'Flatter',
        description: 'Flatter - đồng hành cùng người trầm cảm là công trình nghiên cứu của hai học sinh lớp 8 ở TP.HCM. Dự án này đã lọt vào vòng chung kết Cuộc thi khoa học kỹ thuật cấp thành phố.',
        link: 'https://flatter.onrender.com',
    },
    
    {
        iconUrl: github,
        theme: 'btn-back-black',
        name: 'Trang Github của mình',
        description: 'Đây là nơi các bạn có thể liên lạc với mình, sau này tất cả các sản phẩm mình sẽ để trên này',
        link: 'https://github.com/VietVuDepZai/VietVuDepZai',
    },
    {
        iconUrl: "/src/assets/icons/OIP.jpg",
        theme: 'btn-back-yellow',
        name: '2048',
        description: '2048 là một trò chơi điện tử giải đố gạch trượt một người chơi được viết bởi nhà phát triển web người Ý Gabriele Cirulli và được xuất bản trên GitHub. Mục tiêu của trò chơi là trượt các ô được đánh số trên lưới và đạt điểm cao nhất, game này mình đã cố gắng làm lại, mong các bạn thik nó =))',
        link: 'https://play.unity.com/mg/other/2048-d0nk',
    }
];