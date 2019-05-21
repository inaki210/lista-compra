import { Locale } from '$locale/locales';
import { i18nextInstance } from './i18nextInstance';

export { currentLocale };

function currentLocale() {
  // Ejemplo de contenido:
  // i18next.language = 'es-ES' < El activo en el momento actual
  // i18next.languages = ['es'] < Lenguajes desde los que coge las traducciones.
  // Al estar configurado "languageOnly" el idioma simplificado es el primero
  // de la lista y el fallbackLng el segundo (si es diferente).
  const locale = i18nextInstance.languages
    ? i18nextInstance.languages[0]
    : i18nextInstance.options.fallbackLng;
  return locale as Locale;
}
