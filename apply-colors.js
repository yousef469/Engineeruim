// Script to apply new color palette across all components
// Run with: node apply-colors.js

import fs from 'fs';
import path from 'path';

const colorMappings = {
  // Gray backgrounds -> New dark navy backgrounds
  'bg-gray-900': 'bg-background',
  'bg-gray-800': 'bg-background-light',
  'bg-gray-700': 'bg-background-light',
  'bg-gray-600': 'bg-background-light',
  
  // Cyan/Blue -> Primary blue
  'text-cyan-400': 'text-primary',
  'text-cyan-500': 'text-primary',
  'text-blue-400': 'text-primary',
  'text-blue-500': 'text-primary',
  'bg-cyan-400': 'bg-primary',
  'bg-blue-500': 'bg-primary',
  'bg-blue-600': 'bg-primary',
  'hover:bg-blue-600': 'hover:bg-primary-dark',
  'hover:text-cyan-400': 'hover:text-primary-light',
  
  // Borders
  'border-gray-700': 'border-primary/20',
  'border-gray-600': 'border-primary/30',
  
  // Green -> Secondary
  'text-green-400': 'text-secondary',
  'text-green-500': 'text-secondary',
  'bg-green-500': 'bg-secondary',
  'bg-green-600': 'bg-secondary',
  
  // Yellow/Gold -> Accent
  'text-yellow-400': 'text-accent',
  'text-yellow-500': 'text-accent',
  'bg-yellow-400': 'bg-accent',
  'bg-yellow-500': 'bg-accent',
  
  // Text colors
  'text-gray-400': 'text-text-secondary',
  'text-gray-500': 'text-text-muted',
  'text-gray-300': 'text-text',
};

const filesToUpdate = [
  'src/pages/HomePage.jsx',
  'src/pages/MathematicsLessonPage.jsx',
  'src/pages/GameMapMathematics.jsx',
  'src/pages/MathematicsPage.jsx',
  'src/components/SidebarMenu.jsx',
  'src/App.jsx',
];

function applyColors() {
  let totalReplacements = 0;
  
  filesToUpdate.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Skipping ${filePath} (not found)`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let replacements = 0;
    
    Object.entries(colorMappings).forEach(([oldColor, newColor]) => {
      const regex = new RegExp(oldColor, 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, newColor);
        replacements += matches.length;
      }
    });
    
    if (replacements > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${filePath} (${replacements} replacements)`);
      totalReplacements += replacements;
    } else {
      console.log(`⏭️  No changes needed in ${filePath}`);
    }
  });
  
  console.log(`\n🎨 Total color replacements: ${totalReplacements}`);
  console.log('✨ Color palette applied successfully!');
}

applyColors();
