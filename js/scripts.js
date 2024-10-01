// Diccionario de traducción
const traducciones = {
    es: {
        /*navbar*/
        inicio: "Inicio",
        acerca: "Acerca de nosotras",
        que_hacemos: "Qué hacemos",
        publicaciones: "Publicaciones",
        actividades: "Actividades",
        contacto: "Contacto",
        donaciones: "Donaciones",

        /*inicio*/
        objetivo_titulo: "Nuestro Objetivo",
        objetivo_texto: "Somos mujeres con distintas trayectorias profesionales y experiencias en espacios públicos y políticos de decisión, tanto en los distintos niveles del Estado como en organismos internacionales, instituciones académicas, organizaciones feministas y de derechos humanos, que decidimos crear feministas SIN fronteras para contribuir a desarrollar, profundizar, ampliar y consolidar la visión, el poder transformador y el impacto concreto de la Politica Exterior Feminista en el ámbito de las relaciones internacionales en nuestro país y a nivel bilateral, subregional, regional, internacional y global. Somos mujeres diversas decididas a trabajar desde feministas SIN fronteras y en alianza con otras organizaciones para lograr que la progresiva adopción de una política exterior feminista permita priorizar y definir como ejes estratégicos de las relaciones internacionales y de la agenda global, entre otras cuestiones, la igualdad sustantiva de género; un modelo de desarrollo sostenible en lo económico, social y ambiental; la participación de las mujeres en procesos de toma de decisión; la erradicación de las violencias; y el diseño y puesta en marcha de mecanismos innovadores, inclusivos, participativos y eficaces para la defensa de la democracia y el Estado de Derecho a nivel nacional, regional y multilateral",
        /*novedades*/
        novedades_titulo: "Novedades",
    
        novedad_titulo1: "Título de Novedad 1",
        novedad1: "Este es un breve resumen de la primera novedad. Aquí se muestra un extracto interesante que invita a los usuarios a leer más...",
        novedad_titulo2: "Título de Novedad 2",
        novedad2: "Este es un breve resumen de la segunda novedad. Aquí se muestra un extracto interesante que invita a los usuarios a leer más...",
        novedad_titulo3: "Título de Novedad 3",
        novedad3: "Este es un breve resumen de la tercera novedad. Aquí se muestra un extracto interesante que invita a los usuarios a leer más...",

        btn_leer_mas: "Leer más",

        que_hacemos_titulo: "Qué Hacemos",
        de_donde_partimos: "De dónde partimos",
        descripcion_origen: "Descripción sobre el origen de la organización.",
        nuestro_horizonte: "Nuestro horizonte",
        descripcion_horizonte: "Descripción de nuestras metas y objetivos.",
        publicaciones_titulo: "Publicaciones",
        titulo_publicacion_1: "Título de Publicación 1",
        descripcion_publicacion_1: "Descripción breve de la publicación 1.",
        titulo_publicacion_2: "Título de Publicación 2",
        descripcion_publicacion_2: "Descripción breve de la publicación 2.",
        actividades_titulo: "Actividades",
        actividad_1: "Actividad 1",
        descripcion_actividad_1: "Descripción de la actividad 1.",
        actividad_2: "Actividad 2",
        descripcion_actividad_2: "Descripción de la actividad 2.",
        contacto_titulo: "Contacto",
        nombre: "Nombre:",
        email: "Email:",
        mensaje: "Mensaje:",
        enviar: "Enviar",
        donaciones_titulo: "Donaciones",
        instrucciones_donacion: "Instrucciones para realizar donaciones.",
        monto: "Monto:",
        realizar_donacion: "Realizar Donación",

    },
    en: {
        inicio: "Home",
        acerca: "About Us",
        que_hacemos: "What We Do",
        publicaciones: "Publications",
        actividades: "Activities",
        contacto: "Contact",
        donaciones: "Donations",

        /*inicio*/
        objetivo_titulo: "Our Objective",
        objetivo_texto: "We are women with different professional trajectories and experiences in public and political decision-making spaces, both at different levels of the State and in international organizations, academic institutions, feminist and human rights organizations, who decided to create feminists WITHOUT borders to contribute to developing, deepening , expand and consolidate the vision, the transformative power and the concrete impact of the Feminist Foreign Policy in the field of international relations in our country and at the bilateral, subregional, regional, international and global level. We are diverse women determined to work as feminists WITHOUT borders and in alliance with other organizations to ensure that the progressive adoption of a feminist foreign policy allows us to prioritize and define equality as strategic axes of international relations and the global agenda, among other issues. gender noun; a sustainable development model in economic, social and environmental terms; the participation of women in decision-making processes; the eradication of violence; and the design and implementation of innovative, inclusive, participatory and effective mechanisms for the defense of democracy and the rule of law at the national, regional and multilateral levels.",
        /*novedades*/
        novedades_titulo: "News",
       
        novedad_titulo1: "New Title 1",
        novedad1: "This is a brief summary of the first news. Here is an interesting excerpt that invites users to read more...",
        novedad_titulo2: "New Title 2",
        novedad2: "This is a brief summary of the second news. Here is an interesting excerpt that invites users to read more...",
        novedad_titulo3: "New Title 3",
        novedad3: "This is a brief summary of the third novelty. Here is an interesting excerpt that invites users to read more...",

        btn_leer_mas: "Read more",




        que_hacemos_titulo: "What We Do",
        de_donde_partimos: "Where We Come From",
        descripcion_origen: "Description about the origin of the organization.",
        nuestro_horizonte: "Our Horizon",
        descripcion_horizonte: "Description of our goals and objectives.",
        publicaciones_titulo: "Publications",
        titulo_publicacion_1: "Publication Title 1",
        descripcion_publicacion_1: "Brief description of publication 1.",
        titulo_publicacion_2: "Publication Title 2",
        descripcion_publicacion_2: "Brief description of publication 2.",
        actividades_titulo: "Activities",
        actividad_1: "Activity 1",
        descripcion_actividad_1: "Description of activity 1.",
        actividad_2: "Activity 2",
        descripcion_actividad_2: "Description of activity 2.",
        contacto_titulo: "Contact",
        nombre: "Name:",
        email: "Email:",
        mensaje: "Message:",
        enviar: "Send",
        donaciones_titulo: "Donations",
        instrucciones_donacion: "Instructions for making donations.",
        monto: "Amount:",
        realizar_donacion: "Make Donation",
        novedades_titulo: "News"
    },
};

// Función para cambiar idioma
function cambiarIdioma(idioma) {
    document.querySelectorAll('[data-text]').forEach(element => {
        const key = element.getAttribute('data-text');
        element.textContent = traducciones[idioma][key] || element.textContent;
    });
}
