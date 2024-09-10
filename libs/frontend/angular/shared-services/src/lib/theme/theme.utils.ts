import { RouteTheme } from './theme.enum';

interface RouteThemeIndex {
  [key: string]: string;
}

export function getThemeForRoute(route: string): string {
  return (RouteTheme as RouteThemeIndex)[route] || 'sunset';
}