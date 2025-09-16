#!/usr/bin/env node

/**
 * Pug compilation script
 * Compiles Pug templates to HTML
 */

const pug = require('pug');
const fs = require('fs');
const path = require('path');

// Load template data
const data = require('../templates/data.js');

// Configuration
const config = {
  templateDir: 'templates',
  outputDir: '.',
  templates: [
    {
      input: 'index.pug',
      output: 'index.html'
    }
  ]
};

/**
 * Compile a single Pug template
 */
function compileTemplate(template) {
  const inputPath = path.join(__dirname, '..', config.templateDir, template.input);
  const outputPath = path.join(__dirname, '..', config.outputDir, template.output);
  
  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.error(`❌ Template file not found: ${inputPath}`);
      return false;
    }
    
    // Compile the template
    const compiledFunction = pug.compileFile(inputPath, {
      pretty: true,
      basedir: path.join(__dirname, '..', config.templateDir)
    });
    
    // Render with data
    const html = compiledFunction(data);
    
    // Write to output file
    fs.writeFileSync(outputPath, html);
    
    console.log(`✅ Compiled: ${template.input} → ${template.output}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error compiling ${template.input}:`, error.message);
    return false;
  }
}

/**
 * Compile all templates
 */
function compileAll() {
  console.log('🚀 Compiling Pug templates...\n');
  
  let successCount = 0;
  let totalCount = config.templates.length;
  
  config.templates.forEach(template => {
    if (compileTemplate(template)) {
      successCount++;
    }
  });
  
  console.log(`\n📊 Compilation complete: ${successCount}/${totalCount} templates compiled successfully`);
  
  if (successCount === totalCount) {
    console.log('🎉 All templates compiled successfully!');
    return true;
  } else {
    console.log('⚠️  Some templates failed to compile');
    return false;
  }
}

/**
 * Watch for changes and recompile
 */
function watchTemplates() {
  const chokidar = require('chokidar');
  
  console.log('👀 Watching for template changes...\n');
  
  // Watch the templates directory directly instead of using a glob pattern
  const watchPath = path.join(__dirname, '..', config.templateDir);
  console.log(`🔍 Watching path: ${watchPath}`);
  
  const watcher = chokidar.watch(watchPath, { ignored: /[\/\\]\./, persistent: true });
  
  watcher.on('ready', () => {
    console.log('✅ File watcher is ready and monitoring changes');
  });
  
  watcher.on('change', (filePath) => {
    console.log(`\n🔄 File changed: ${path.relative(process.cwd(), filePath)}`);
    
    // Find which template this file belongs to
    const fileName = path.basename(filePath);
    const template = config.templates.find(t => t.input === fileName);
    
    if (template) {
      compileTemplate(template);
    } else {
      // If it's not a main template, recompile all
      compileAll();
    }
  });
  
  // Initial compilation
  compileAll();
}

// Main execution
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'watch':
      watchTemplates();
      break;
    case 'compile':
    default:
      const success = compileAll();
      process.exit(success ? 0 : 1);
      break;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  compileTemplate,
  compileAll,
  watchTemplates
};
