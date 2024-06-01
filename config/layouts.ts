// src/config/sideMenuConfig.ts

// Define an interface for the side menu configuration
export interface SideMenuConfig {
  width: string;
  type: 'extended' | 'collapsed';
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
  transitionDuration: string;
  position: 'left' | 'right';
}

// Export the configuration object
export const sideMenuConfig: SideMenuConfig = {
  width: '250px', // Width of the side menu
  type: 'extended', // Type of the side menu (extended or collapsed)
  backgroundColor: '#343a40', // Background color of the side menu
  textColor: '#ffffff', // Text color for the menu items
  hoverColor: '#495057', // Hover color for the menu items
  transitionDuration: '0.3s', // Duration of the transition effects
  position: 'left', // Position of the side menu (left or right)
};
