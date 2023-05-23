import { abortNavigation } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  const excludeRoutes = [
    'chat-gpt',
    'container',
    'hmos',
  ];
  if (excludeRoutes.includes(to.name)) {
    return abortNavigation();
  }
  return navigateTo('/');
});
