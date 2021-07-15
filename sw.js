/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "rickmrdm-1.30";

/** Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
  "b_sw.html",
  "favicon.ico",
  "index.html",
  "LICENSE",
  "site.webmanifest",
  "sw.js",
  "cmp/mi-nav.js",
  "css/estilos.css",
  "c_multiplataforma/3_nativa.html",
  "c_multiplataforma/4_multiplataforma.html",
  "c_multiplataforma/5_diferencias.html",
  "c_multiplataforma/6_ventajas_nativas.html",
  "c_multiplataforma/7_ventajas_multiplataforma.html",
  "c_multiplataforma/index.html",
  "d_multimedia/10_ejemplo_video.html",
  "d_multimedia/3_a.html",
  "d_multimedia/4_imagenes.html",
  "d_multimedia/5_ejemplo_imagenes.html",
  "d_multimedia/6_audio_y_video.html",
  "d_multimedia/7_audio.html",
  "d_multimedia/8_ejemplo_audio.html",
  "d_multimedia/9_video.html",
  "d_multimedia/index.html",
  "d_multimedia/src/1_imagenes.html",
  "d_multimedia/src/2_audio.html",
  "d_multimedia/src/3_video.html",
  "d_multimedia/src/bensound-summer.mp3",
  "d_multimedia/src/clouds_poster.jpg",
  "d_x_vistas/1_app.html",
  "d_x_vistas/2_campos.html",
  "d_x_vistas/3_interruptores.html",
  "d_x_vistas/4_sliders.html",
  "d_x_vistas/5_botones.html",
  "d_x_vistas/5_progreso.html",
  "d_x_vistas/6_navegacion.html",
  "d_x_vistas/7_gps.html",
  "d_x_vistas/8_archivos.html",
  "d_x_vistas/index.html",
  "d_x_vistas/src/app.html",
  "d_x_vistas/src/archivos.html",
  "d_x_vistas/src/botones.html",
  "d_x_vistas/src/campos.html",
  "d_x_vistas/src/gps.html",
  "d_x_vistas/src/interruptor.html",
  "d_x_vistas/src/navegacion.html",
  "d_x_vistas/src/progreso.html",
  "d_x_vistas/src/slider.html",
  "e_pwa/10_favicon.html",
  "e_pwa/11_icono256.html",
  "e_pwa/12_icono1024.html",
  "e_pwa/13_icono2048.html",
  "e_pwa/14_webmanifest.html",
  "e_pwa/15_sw.html",
  "e_pwa/16_estilos.html",
  "e_pwa/17_principal.html",
  "e_pwa/18_ripple.html",
  "e_pwa/19_botones.html",
  "e_pwa/20_cmp-din_js.html",
  "e_pwa/21_cmp-din_css.html",
  "e_pwa/22_movil.html",
  "e_pwa/23_material-icons.html",
  "e_pwa/24_MaterialIcons-Regular_codepoints.html",
  "e_pwa/25_MaterialIcons-Regular.html",
  "e_pwa/26_roboto.html",
  "e_pwa/27_roboto-v27-latin-regular_woff.html",
  "e_pwa/28_roboto-v27-latin-regular_woff2.html",
  "e_pwa/29_LICENSE.html",
  "e_pwa/2_instrucciones.html",
  "e_pwa/3_archivos.html",
  "e_pwa/4_ayuda.html",
  "e_pwa/5_index.html",
  "e_pwa/6_CtrlDivide.html",
  "e_pwa/7_config.html",
  "e_pwa/8_mi-nav_js.html",
  "e_pwa/9_mi-nav_css.html",
  "e_pwa/index.html",
  "e_pwa/img/favicon.ico",
  "e_pwa/img/icono1024.png",
  "e_pwa/img/icono2048.png",
  "e_pwa/img/icono256.png",
  "e_pwa/src/LICENSE.html",
  "e_pwa/src/MaterialIcons-Regular.codepoints",
  "e_pwa/src/MaterialIcons-Regular.ttf",
  "e_pwa/src/pwa.zip",
  "e_pwa/src/roboto-v27-latin-regular.woff",
  "e_pwa/src/roboto-v27-latin-regular.woff2",
  "e_sesion/10_CtrlSesion.html",
  "e_sesion/11_b.html",
  "e_sesion/12_index_js.html",
  "e_sesion/13_creaUsuarios.html",
  "e_sesion/14_validaUsuario.html",
  "e_sesion/15_LICENSE.html",
  "e_sesion/3_arquitectura.html",
  "e_sesion/4_despliegue.html",
  "e_sesion/5_er.html",
  "e_sesion/6_no_rel.html",
  "e_sesion/7_instrucciones.html",
  "e_sesion/8_archivos.html",
  "e_sesion/9_index_html.html",
  "e_sesion/index.html",
  "e_sesion/img/aut_componentes.svg",
  "e_sesion/img/aut_despliegue.svg",
  "e_sesion/img/aut_entidades.svg",
  "e_sesion/src/init.js",
  "e_sesion/src/LICENSE.html",
  "f_iot/10_index_html.html",
  "f_iot/11_CtrlMovil.html",
  "f_iot/12_dispositivo.html",
  "f_iot/13_CtrlDispositivo.html",
  "f_iot/14_proxyAgregaEntrada.html",
  "f_iot/15_proxyAgregaSalida.html",
  "f_iot/16_proxyRecuperaEntrada.html",
  "f_iot/17_proxyRecuperaSalida.html",
  "f_iot/18_ResInt.html",
  "f_iot/19_util.html",
  "f_iot/20_estilos.html",
  "f_iot/21_footer.html",
  "f_iot/22_b.html",
  "f_iot/23_index_js.html",
  "f_iot/24_agregaEntrada.html",
  "f_iot/25_agregaSalida.html",
  "f_iot/26_historico.html",
  "f_iot/27_recuperaEntrada.html",
  "f_iot/28_recuperaSalida.html",
  "f_iot/29_LICENSE.html",
  "f_iot/3_casos.html",
  "f_iot/4_despliegue.html",
  "f_iot/5_er.html",
  "f_iot/6_no_rel.html",
  "f_iot/7_instrucciones.html",
  "f_iot/8_archivos.html",
  "f_iot/9_tipos.html",
  "f_iot/index.html",
  "f_iot/img/casos_iot.svg",
  "f_iot/img/despliegue_iot.svg",
  "f_iot/img/entidades_iot.svg",
  "f_iot/img/nosql_iot.svg",
  "f_iot/src/init.js",
  "f_iot/src/LICENSE.html",
  "g_esp8266/10_MiPost.html",
  "g_esp8266/3_blink.html",
  "g_esp8266/4_button.html",
  "g_esp8266/6_MiGet.html",
  "g_esp8266/index.html",
  "g_esp8266/img/MiGet.png",
  "g_esp8266/img/MiPost.png",
  "g_esp8266/src/descarga.json",
  "g_esp8266/src/modifica.json",
  "g_esp8266/src/publica.json",
  "h_dispositivo/10_proxyAgregaEntrada_c.html",
  "h_dispositivo/11_proxyRecuperaSalida_h.html",
  "h_dispositivo/12_proxyRecuperaSalida_c.html",
  "h_dispositivo/3_archivos.html",
  "h_dispositivo/4_Dispositivo.html",
  "h_dispositivo/5_ResInt_h.html",
  "h_dispositivo/6_ResInt_c.html",
  "h_dispositivo/7_util_h.html",
  "h_dispositivo/8_util_c.html",
  "h_dispositivo/9_proxyAgregaEntrada_h.html",
  "h_dispositivo/index.html",
  "h_dispositivo/src/Dispositivo.zip",
  "img/icono1024.png",
  "img/icono2048.png",
  "img/icono256.png",
  "js/config.js",
  "lib/layout-cajon.js",
  "lib/layout-cajon_shadow.js",
  "lib/mi-footer.js",
  "lib/muestra-codigo.js",
  "lib/muestra-codigo_shadow.js",
  "lib/utilHtml.js",
  "lib/css/estilos.css",
  "lib/css/gentium-book-basic-v11-latin-700.woff",
  "lib/css/gentium-book-basic-v11-latin-700.woff2",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-italic.woff",
  "lib/css/gentium-book-basic-v11-latin-italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-regular.woff",
  "lib/css/gentium-book-basic-v11-latin-regular.woff2",
  "lib/css/gentium-book-basic.css",
  "lib/css/material-icons.css",
  "lib/css/MaterialIcons-Regular.codepoints",
  "lib/css/MaterialIcons-Regular.ttf",
  "lib/css/mi-footer.css",
  "lib/css/prueba.css",
  "lib/css/ubuntu-mono-v10-latin-700.woff",
  "lib/css/ubuntu-mono-v10-latin-700.woff2",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-italic.woff",
  "lib/css/ubuntu-mono-v10-latin-italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-regular.woff",
  "lib/css/ubuntu-mono-v10-latin-regular.woff2",
  "lib/css/ubuntu-mono.css",
  "lib/css/ubuntu-v15-latin-700.woff",
  "lib/css/ubuntu-v15-latin-700.woff2",
  "lib/css/ubuntu-v15-latin-700italic.woff",
  "lib/css/ubuntu-v15-latin-700italic.woff2",
  "lib/css/ubuntu-v15-latin-italic.woff",
  "lib/css/ubuntu-v15-latin-italic.woff2",
  "lib/css/ubuntu-v15-latin-regular.woff",
  "lib/css/ubuntu-v15-latin-regular.woff2",
  "lib/css/ubuntu.css",
  "/"
];

addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  // @ts-ignore
  evt.waitUntil(cargaCache());
});

addEventListener("fetch", evt => {
  // @ts-ignore
  if (evt.request.method === "GET") {
    // @ts-ignore
    evt.respondWith(usaCache(evt));
  }
});

addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}
