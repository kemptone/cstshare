import { readdir } from 'node:fs/promises';
import { join, relative, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

export interface SettingFile {
  name: string;
  path: string;
  category: string;
  subcategory?: string;
  extension: string;
}

export interface SettingCategory {
  name: string;
  description: string;
  path: string;
  count: number;
  files: SettingFile[];
}

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = join(__dirname, '../../../'); // Go up from website/src/utils to Audio Music Apps

const categoryDescriptions: Record<string, string> = {
  'Channel Strip Settings': 'Complete channel strip configurations with EQ, compression, and effects',
  'Plug-In Settings': 'Individual plugin presets for Logic Pro and third-party plugins',
  'Patches': 'Instrument patches for synthesizers and samplers',
  'Project Templates': 'Ready-to-use project templates with routing and settings',
  'Key Commands': 'Custom keyboard shortcuts and command sets',
  'Sampler Instruments': 'Custom sampler instruments and multisamples',
};

async function walkDirectory(dir: string, baseDir: string, category: string): Promise<SettingFile[]> {
  const files: SettingFile[] = [];

  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively walk subdirectories
        const subFiles = await walkDirectory(fullPath, baseDir, category);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        // Skip hidden files and system files
        if (entry.name.startsWith('.')) continue;

        const ext = extname(entry.name);
        const relativePath = relative(baseDir, fullPath);
        const pathParts = relativePath.split('/');
        const subcategory = pathParts.length > 2 ? pathParts[1] : undefined;

        files.push({
          name: basename(entry.name, ext),
          path: relativePath,
          category,
          subcategory,
          extension: ext.slice(1), // Remove the dot
        });
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return files;
}

export async function getAllSettings(): Promise<SettingCategory[]> {
  const categories: SettingCategory[] = [];

  const categoryDirs = [
    'Channel Strip Settings',
    'Plug-In Settings',
    'Patches',
    'Project Templates',
    'Key Commands',
    'Sampler Instruments',
  ];

  for (const categoryName of categoryDirs) {
    const categoryPath = join(rootDir, categoryName);
    const files = await walkDirectory(categoryPath, rootDir, categoryName);

    if (files.length > 0) {
      categories.push({
        name: categoryName,
        description: categoryDescriptions[categoryName] || '',
        path: categoryName,
        count: files.length,
        files,
      });
    }
  }

  return categories;
}

export function groupBySubcategory(files: SettingFile[]): Map<string, SettingFile[]> {
  const grouped = new Map<string, SettingFile[]>();

  for (const file of files) {
    const key = file.subcategory || 'Other';
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key)!.push(file);
  }

  return grouped;
}
