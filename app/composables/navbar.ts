import type { NavigationMenuItem } from "@nuxt/ui";

interface NavbarPages {
  main: NavigationMenuItem[];
  apps: NavigationMenuItem[];
}

interface NavbarResponse {
  pages: NavbarPages;
  bodyPages: NavbarPages;
}

export const useNavbar = async () => {
  const { data } = await useFetch<NavbarResponse>("/api/navbar", {
    baseURL: "https://site.jimtracker.com",
    query: {
      app: "tracker"
    },
    key: "navbar",
    getCachedData: (key, nuxtApp) => nuxtApp.payload.data[key]
  });

  if (!data.value) {
    throw createError({
      statusCode: 500,
      message: "Failed to fetch navbar data",
      fatal: true
    });
  }

  return data.value!;
};
