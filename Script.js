// Datos de la aplicación
const appData = {
    // Datos de navegación
    navItems: [
        { text: "Inicio", href: "#inicio" },
        { text: "Trabajos", href: "#trabajos" },
        { text: "Materias", href: "#materias" },
        { text: "Compartir", href: "#compartir" },
        { text: "Equipo", href: "#equipo" },
        { text: "Contactar", href: "#contacto", isButton: true }
    ],
    
    // Datos de la sección hero
    hero: {
        title: "BrainPoli - Plataforma Colaborativa Universitaria",
        description: "Comparte tus trabajos y ayuda a otros estudiantes a superar las materias más difíciles",
        buttons: [
            { text: "Compartir un Trabajo", href: "#compartir" },
            { text: "Explorar Trabajos", href: "#trabajos" }
        ]
    },
    
    // Datos de la plataforma colaborativa
    platformFeatures: [
        {
            icon: "fas fa-upload",
            title: "Comparte",
            description: "Sube tus trabajos, apuntes y resúmenes de materias que ya has aprobado"
        },
        {
            icon: "fas fa-search",
            title: "Encuentra",
            description: "Busca entre miles de recursos compartidos por otros estudiantes"
        },
        {
            icon: "fas fa-graduation-cap",
            title: "Aprende",
            description: "Mejora tu rendimiento académico con materiales probados"
        },
        {
            icon: "fas fa-users",
            title: "Colabora",
            description: "Forma grupos de estudio y conecta con compañeros de tu carrera"
        }
    ],
    
    // Datos de trabajos destacados
    featuredWorks: [
        {
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            title: "Guía Completa de Cálculo Diferencial",
            description: "Resumen con ejemplos prácticos y ejercicios resueltos paso a paso",
            author: "Ana Martínez",
            rating: "★★★★★"
        },
        {
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            title: "Manual de Programación en Java",
            description: "Desde conceptos básicos hasta proyectos avanzados con código comentado",
            author: "Carlos Rodríguez",
            rating: "★★★★☆"
        },
        {
            image: "https://images.unsplash.com/photo-1581093458791-8a0a1edb6c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            title: "Resumen de Química Orgánica",
            description: "Tablas periódicas, reacciones comunes y técnicas de laboratorio",
            author: "María González",
            rating: "★★★★★"
        }
    ],
    
    // Datos de materias difíciles
    difficultSubjects: [
        {
            icon: "fas fa-calculator",
            title: "Cálculo Diferencial",
            resources: "128 recursos disponibles",
            difficulty: "high",
            difficultyText: "Alta dificultad"
        },
        {
            icon: "fas fa-flask",
            title: "Química Orgánica",
            resources: "95 recursos disponibles",
            difficulty: "high",
            difficultyText: "Alta dificultad"
        },
        {
            icon: "fas fa-code",
            title: "Programación I",
            resources: "203 recursos disponibles",
            difficulty: "medium",
            difficultyText: "Media dificultad"
        },
        {
            icon: "fas fa-brain",
            title: "Estadística",
            resources: "87 recursos disponibles",
            difficulty: "medium",
            difficultyText: "Media dificultad"
        }
    ],
    
    // Datos de cómo funciona
    howItWorks: [
        {
            number: "1",
            title: "Regístrate",
            description: "Crea tu cuenta de estudiante verificada con tu correo universitario"
        },
        {
            number: "2",
            title: "Sube tu trabajo",
            description: "Comparte apuntes, resúmenes, trabajos prácticos o proyectos"
        },
        {
            number: "3",
            title: "Etiqueta y describe",
            description: "Clasifica por materia, dificultad y añade una descripción útil"
        },
        {
            number: "4",
            title: "Ayuda a otros",
            description: "Recibe comentarios y ayuda a compañeros que necesiten apoyo"
        }
    ],
    
    // Datos de testimonios
    testimonials: [
        {
            text: "Gracias a los resúmenes de Cálculo que encontré aquí, pude aprobar el parcial que tenía pendiente. La comunidad es muy activa y los materiales son de alta calidad.",
            author: "Laura Mendoza",
            role: "Estudiante de Ingeniería",
            initials: "LM"
        },
        {
            text: "Como estudiante de nuevo ingreso, BrainPoli me salvó. Los manuales de programación me ayudaron a entender conceptos que en clase pasaron muy rápido.",
            author: "José Gutiérrez",
            role: "Estudiante de primer año",
            initials: "JG"
        },
        {
            text: "He compartido mis apuntes de Química y es increíble recibir mensajes de agradecimiento de otros estudiantes. Esta plataforma realmente hace la diferencia.",
            author: "Sofía Pérez",
            role: "Estudiante de Química",
            initials: "SP"
        }
    ],
    
    // Datos del equipo
    teamMembers: [
        {
            initials: "AP",
            name: "Andrés Pérez",
            role: "Desarrollador Frontend",
            description: "Estudiante de Ingeniería de Sistemas"
        },
        {
            initials: "BE",
            name: "Bryan Echeverry",
            role: "Diseñador UX/UI",
            description: "Estudiante de Diseño Gráfico"
        },
        {
            initials: "JJ",
            name: "Juan José",
            role: "Desarrollador Backend",
            description: "Estudiante de Ingeniería Informática"
        },
        {
            initials: "CC",
            name: "Cristian",
            role: "Coordinador Académico",
            description: "Estudiante de Pedagogía"
        }
    ]
};

// Función para crear elementos DOM
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    
    // Añadir atributos
    Object.keys(attributes).forEach(key => {
        if (key === 'className') {
            element.className = attributes[key];
        } else if (key === 'innerHTML') {
            element.innerHTML = attributes[key];
        } else if (key === 'style') {
            Object.assign(element.style, attributes[key]);
        } else {
            element.setAttribute(key, attributes[key]);
        }
    });
    
    // Añadir hijos
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    
    return element;
}

// Función para crear el header
function createHeader() {
    const header = createElement('header');
    
    const headerContainer = createElement('div', { className: 'container header-container' });
    
    // Logo
    const logoLink = createElement('a', { href: '#inicio', className: 'logo' });
    const logoContainer = createElement('div', { className: 'logo-container' });
    
    const logoImage = createElement('div', { className: 'logo-image' });
    const logoImg = createElement('img', { 
        src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiByeD0iMTAiIGZpbGw9IiMxRTU2MzEiLz4KPHRleHQgeD0iMTAwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJyYWluUG9saTwvdGV4dD4KPHRleHQgeD0iMTAwIiB5PSIxMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBsYXRhZm9ybWEgRWR1Y2F0aXZhPC90ZXh0Pgo8dGV4dCB4PSIxMDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+cGFyYSBHcmFuZGVzIE1lbnRlczwvdGV4dD4KPC9zdmc+', 
        alt: 'BrainPoli Logo' 
    });
    logoImage.appendChild(logoImg);
    
    const logoText = createElement('div', { className: 'logo-text' });
    const logoTitle = createElement('h1', {}, ['BrainPoli']);
    const logoSubtitle = createElement('span', {}, ['Plataforma Colaborativa']);
    
    logoText.appendChild(logoTitle);
    logoText.appendChild(logoSubtitle);
    
    logoContainer.appendChild(logoImage);
    logoContainer.appendChild(logoText);
    logoLink.appendChild(logoContainer);
    
    // Menú móvil
    const mobileMenu = createElement('div', { className: 'mobile-menu' }, ['☰']);
    
    // Navegación
    const nav = createElement('nav');
    const navList = createElement('ul');
    
    appData.navItems.forEach(item => {
        const listItem = createElement('li');
        const link = createElement('a', { 
            href: item.href,
            className: item.isButton ? 'btn' : ''
        }, [item.text]);
        
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });
    
    nav.appendChild(navList);
    
    headerContainer.appendChild(logoLink);
    headerContainer.appendChild(mobileMenu);
    headerContainer.appendChild(nav);
    header.appendChild(headerContainer);
    
    // Event listener para el menú móvil
    mobileMenu.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
    
    return header;
}

// Función para crear la sección hero
function createHero() {
    const hero = createElement('section', { className: 'hero', id: 'inicio' });
    const container = createElement('div', { className: 'container' });
    
    const title = createElement('h2', {}, [appData.hero.title]);
    const description = createElement('p', {}, [appData.hero.description]);
    
    container.appendChild(title);
    container.appendChild(description);
    
    appData.hero.buttons.forEach(button => {
        const btn = createElement('a', { 
            href: button.href, 
            className: 'btn' 
        }, [button.text]);
        container.appendChild(btn);
    });
    
    hero.appendChild(container);
    return hero;
}

// Función para crear la sección de plataforma colaborativa
function createPlatformCollaborative() {
    const section = createElement('section', { className: 'platform-collaborative', id: 'compartir' });
    const container = createElement('div', { className: 'container' });
    
    const sectionTitle = createElement('div', { className: 'section-title' });
    const title = createElement('h2', {}, ['¿Cómo Funciona BrainPoli?']);
    const subtitle = createElement('p', {}, ['Una plataforma creada por estudiantes para estudiantes']);
    
    sectionTitle.appendChild(title);
    sectionTitle.appendChild(subtitle);
    
    const grid = createElement('div', { className: 'collaborative-grid' });
    
    appData.platformFeatures.forEach(feature => {
        const card = createElement('div', { className: 'collaborative-card' });
        
        const icon = createElement('i', { className: feature.icon });
        const titleElement = createElement('h3', {}, [feature.title]);
        titleElement.prepend(icon);
        
        const description = createElement('p', {}, [feature.description]);
        
        card.appendChild(titleElement);
        card.appendChild(description);
        grid.appendChild(card);
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
}

// Función para crear la sección de trabajos destacados
function createFeaturedWorks() {
    const section = createElement('section', { className: 'featured-works', id: 'trabajos' });
    const container = createElement('div', { className: 'container' });
    
    const sectionTitle = createElement('div', { className: 'section-title' });
    const title = createElement('h2', {}, ['Trabajos Destacados']);
    const subtitle = createElement('p', {}, ['Los recursos más útiles compartidos por la comunidad']);
    
    sectionTitle.appendChild(title);
    sectionTitle.appendChild(subtitle);
    
    const grid = createElement('div', { className: 'works-grid' });
    
    appData.featuredWorks.forEach(work => {
        const card = createElement('div', { className: 'work-card' });
        
        const image = createElement('img', { 
            src: work.image, 
            alt: work.title, 
            className: 'work-image' 
        });
        
        const content = createElement('div', { className: 'work-content' });
        const titleElement = createElement('h3', {}, [work.title]);
        const description = createElement('p', {}, [work.description]);
        
        const meta = createElement('div', { className: 'work-meta' });
        const author = createElement('span', {}, [`Por: ${work.author}`]);
        const rating = createElement('span', { className: 'work-rating' }, [work.rating]);
        
        meta.appendChild(author);
        meta.appendChild(rating);
        
        content.appendChild(titleElement);
        content.appendChild(description);
        content.appendChild(meta);
        
        card.appendChild(image);
        card.appendChild(content);
        grid.appendChild(card);
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
}

// Función para crear la sección de materias difíciles
function createDifficultSubjects() {
    const section = createElement('section', { className: 'difficult-subjects', id: 'materias' });
    const container = createElement('div', { className: 'container' });
    
    const sectionTitle = createElement('div', { className: 'section-title' });
    const title = createElement('h2', {}, ['Materias con Más Recursos']);
    const subtitle = createElement('p', {}, ['Encuentra ayuda para las asignaturas que más se te dificultan']);
    
    sectionTitle.appendChild(title);
    sectionTitle.appendChild(subtitle);
    
    const grid = createElement('div', { className: 'subjects-grid' });
    
    appData.difficultSubjects.forEach(subject => {
        const card = createElement('div', { className: 'subject-card' });
        
        const icon = createElement('i', { 
            className: subject.icon,
            style: { fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }
        });
        
        const titleElement = createElement('h3', {}, [subject.title]);
        const resources = createElement('p', {}, [subject.resources]);
        const difficulty = createElement('span', { 
            className: `difficulty ${subject.difficulty}` 
        }, [subject.difficultyText]);
        
        card.appendChild(icon);
        card.appendChild(titleElement);
        card.appendChild(resources);
        card.appendChild(difficulty);
        grid.appendChild(card);
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
}

// Función para crear la sección de cómo funciona
function createHowItWorks() {
    const section = createElement('section', { className: 'how-it-works' });
    const container = createElement('div', { className: 'container' });
    
    const sectionTitle = createElement('div', { className: 'section-title' });
    const title = createElement('h2', {}, ['Compartir es Fácil']);
    const subtitle = createElement('p', {}, ['Sigue estos simples pasos para contribuir a la comunidad']);
    
    sectionTitle.appendChild(title);
    sectionTitle.appendChild(subtitle);
    
    const steps = createElement('div', { className: 'steps' });
    
    appData.howItWorks.forEach(step => {
        const stepElement = createElement('div', { className: 'step' });
        
        const number = createElement('div', { className: 'step-number' }, [step.number]);
        const titleElement = createElement('h3', {}, [step.title]);
        const description = createElement('p', {}, [step.description]);
        
        stepElement.appendChild(number);
        stepElement.appendChild(titleElement);
        stepElement.appendChild(description);
        steps.appendChild(stepElement);
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(steps);
    section.appendChild(container);
    
    return section;
}

// Función para crear la sección de testimonios
function createTestimonials() {
    const section = createElement('section', { className: 'testimonials' });
    const container = createElement('div', { className: 'container' });
    
    const sectionTitle = createElement('div', { className: 'section-title' });
    const title = createElement('h2', {}, ['Lo Que Dicen Nuestros Usuarios']);
    const subtitle = createElement('p', {}, ['Experiencias reales de estudiantes que han usado BrainPoli']);
    
    sectionTitle.appendChild(title);
    sectionTitle.appendChild(subtitle);
    
    const grid = createElement('div', { className: 'testimonials-grid' });
    
    appData.testimonials.forEach(testimonial => {
        const card = createElement('div', { className: 'testimonial-card' });
        
        const text = createElement('div', { className: 'testimonial-text' }, [testimonial.text]);
        
        const author = createElement('div', { className: 'testimonial-author' });
        const avatar = createElement('div', { className: 'author-avatar' }, [testimonial.initials]);
        const authorInfo = createElement('div', { className: 'author-info' });
        const authorName = createElement('h4', {}, [testimonial.author]);
        const authorRole = createElement('p', {}, [testimonial.role]);
        
        authorInfo.appendChild(authorName);
        authorInfo.appendChild(authorRole);
        author.appendChild(avatar);
        author.appendChild(authorInfo);
        
        card.appendChild(text);
        card.appendChild(author);
        grid.appendChild(card);
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
}

// Función para crear la sección de compartir trabajo
function createShareWork() {
    const section = createElement('section', { className: 'share-work' });
    const container = createElement('div', { className: 'container' });
    
    const sectionTitle = createElement('div', { className: 'section-title' });
    const title = createElement('h2', {}, ['Comparte Tu Trabajo']);
    const subtitle = createElement('p', {}, ['Ayuda a otros estudiantes compartiendo tus apuntes y trabajos']);
    
    sectionTitle.appendChild(title);
    sectionTitle.appendChild(subtitle);
    
    const form = createElement('form', { className: 'share-form' });
    
    const formGroups = [
        { label: 'Título del Trabajo', type: 'text', id: 'work-title', placeholder: 'Ej: Resumen de Cálculo Diferencial' },
        { label: 'Materia', type: 'select', id: 'work-subject', options: [
            'Cálculo Diferencial', 'Química Orgánica', 'Programación I', 'Estadística', 'Física', 'Álgebra Lineal'
        ] },
        { label: 'Descripción', type: 'textarea', id: 'work-description', placeholder: 'Describe brevemente tu trabajo y cómo puede ayudar a otros estudiantes' },
        { label: 'Nivel de Dificultad', type: 'select', id: 'work-difficulty', options: [
            'Baja', 'Media', 'Alta'
        ] },
        { label: 'Archivo', type: 'file', id: 'work-file' }
    ];
    
    formGroups.forEach(group => {
        const formGroup = createElement('div', { className: 'form-group' });
        const label = createElement('label', { for: group.id }, [group.label]);
        
        formGroup.appendChild(label);
        
        if (group.type === 'select') {
            const select = createElement('select', { id: group.id, name: group.id });
            group.options.forEach(option => {
                const optionElement = createElement('option', { value: option }, [option]);
                select.appendChild(optionElement);
            });
            formGroup.appendChild(select);
        } else if (group.type === 'textarea') {
            const textarea = createElement('textarea', { 
                id: group.id, 
                name: group.id,
                placeholder: group.placeholder
            });
            formGroup.appendChild(textarea);
        } else {
            const input = createElement('input', { 
                type: group.type, 
                id: group.id, 
                name: group.id,
                placeholder: group.placeholder || ''
            });
            formGroup.appendChild(input);
        }
        
        form.appendChild(formGroup);
    });
    
    const submitButton = createElement('button', { 
        type: 'submit', 
        className: 'btn' 
    }, ['Compartir Trabajo']);
    
    form.appendChild(submitButton);
    
    // Event listener para el formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por compartir tu trabajo! Será revisado y publicado pronto.');
        form.reset();
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(form);
    section.appendChild(container);
    
    return section;
}

// Función para crear la sección del equipo
function createTeam() {
    const section = createElement('section', { className: 'team', id: 'equipo' });
    const container = createElement('div', { className: 'container' });
    
    const sectionTitle = createElement('div', { className: 'section-title' });
    const title = createElement('h2', {}, ['Nuestro Equipo']);
    const subtitle = createElement('p', {}, ['Estudiantes apasionados que crearon BrainPoli para ayudar a la comunidad universitaria']);
    
    sectionTitle.appendChild(title);
    sectionTitle.appendChild(subtitle);
    
    const grid = createElement('div', { className: 'team-grid' });
    
    appData.teamMembers.forEach(member => {
        const teamMember = createElement('div', { className: 'team-member' });
        
        const avatar = createElement('div', { className: 'member-avatar' }, [member.initials]);
        const name = createElement('h3', {}, [member.name]);
        const role = createElement('p', { className: 'member-role' }, [member.role]);
        const description = createElement('p', {}, [member.description]);
        
        teamMember.appendChild(avatar);
        teamMember.appendChild(name);
        teamMember.appendChild(role);
        teamMember.appendChild(description);
        grid.appendChild(teamMember);
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(grid);
    section.appendChild(container);
    
    return section;
}

// Función para crear el footer
function createFooter() {
    const footer = createElement('footer', { id: 'contacto' });
    const container = createElement('div', { className: 'container' });
    
    const footerContent = createElement('div', { className: 'footer-content' });
    
    // Columna 1: Información
    const infoColumn = createElement('div', { className: 'footer-column' });
    const infoTitle = createElement('h3', {}, ['BrainPoli']);
    const infoDescription = createElement('p', {}, [
        'Plataforma colaborativa universitaria creada por estudiantes para estudiantes. Comparte conocimientos y ayuda a otros a superar las materias más difíciles.'
    ]);
    
    infoColumn.appendChild(infoTitle);
    infoColumn.appendChild(infoDescription);
    
    // Columna 2: Enlaces rápidos
    const linksColumn = createElement('div', { className: 'footer-column' });
    const linksTitle = createElement('h3', {}, ['Enlaces Rápidos']);
    const linksList = createElement('ul');
    
    const quickLinks = [
        { text: 'Inicio', href: '#inicio' },
        { text: 'Trabajos Destacados', href: '#trabajos' },
        { text: 'Materias', href: '#materias' },
        { text: 'Compartir Trabajo', href: '#compartir' },
        { text: 'Nuestro Equipo', href: '#equipo' }
    ];
    
    quickLinks.forEach(link => {
        const listItem = createElement('li');
        const linkElement = createElement('a', { href: link.href }, [link.text]);
        listItem.appendChild(linkElement);
        linksList.appendChild(listItem);
    });
    
    linksColumn.appendChild(linksTitle);
    linksColumn.appendChild(linksList);
    
    // Columna 3: Contacto
    const contactColumn = createElement('div', { className: 'footer-column' });
    const contactTitle = createElement('h3', {}, ['Contáctanos']);
    const contactForm = createElement('form', { className: 'contact-form' });
    
    const contactFields = [
        { type: 'text', placeholder: 'Tu nombre' },
        { type: 'email', placeholder: 'Tu correo electrónico' },
        { type: 'textarea', placeholder: 'Tu mensaje' }
    ];
    
    contactFields.forEach(field => {
        let element;
        if (field.type === 'textarea') {
            element = createElement('textarea', { 
                placeholder: field.placeholder,
                rows: '3'
            });
        } else {
            element = createElement('input', { 
                type: field.type,
                placeholder: field.placeholder
            });
        }
        contactForm.appendChild(element);
    });
    
    const submitButton = createElement('button', { 
        type: 'submit', 
        className: 'btn' 
    }, ['Enviar Mensaje']);
    
    contactForm.appendChild(submitButton);
    
    // Event listener para el formulario de contacto
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        contactForm.reset();
    });
    
    const socialLinks = createElement('div', { className: 'social-links' });
    const socialIcons = [
        { icon: 'fab fa-facebook-f', href: '#' },
        { icon: 'fab fa-twitter', href: '#' },
        { icon: 'fab fa-instagram', href: '#' },
        { icon: 'fab fa-linkedin-in', href: '#' }
    ];
    
    socialIcons.forEach(social => {
        const link = createElement('a', { href: social.href });
        const icon = createElement('i', { className: social.icon });
        link.appendChild(icon);
        socialLinks.appendChild(link);
    });
    
    contactColumn.appendChild(contactTitle);
    contactColumn.appendChild(contactForm);
    contactColumn.appendChild(socialLinks);
    
    footerContent.appendChild(infoColumn);
    footerContent.appendChild(linksColumn);
    footerContent.appendChild(contactColumn);
    
    const copyright = createElement('div', { className: 'copyright' }, [
        '© 2023 BrainPoli. Todos los derechos reservados.'
    ]);
    
    container.appendChild(footerContent);
    container.appendChild(copyright);
    footer.appendChild(container);
    
    return footer;
}

// Función para inicializar la aplicación
function initApp() {
    const app = document.getElementById('app');
    
    // Crear y añadir todas las secciones
    app.appendChild(createHeader());
    app.appendChild(createHero());
    app.appendChild(createPlatformCollaborative());
    app.appendChild(createFeaturedWorks());
    app.appendChild(createDifficultSubjects());
    app.appendChild(createHowItWorks());
    app.appendChild(createTestimonials());
    app.appendChild(createShareWork());
    app.appendChild(createTeam());
    app.appendChild(createFooter());
    
    // Añadir smooth scrolling para los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                const navList = document.querySelector('nav ul');
                if (navList.classList.contains('show')) {
                    navList.classList.remove('show');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initApp);