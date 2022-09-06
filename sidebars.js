/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  vineSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: '1. The Life of a Grapevine',
      link: {
        type: 'doc',
        id: 'life-of-grapevine/README',
      },
      items: [
        'life-of-grapevine/ten-key-things-about-cold-climate-grapevines/README',
        'life-of-grapevine/vine-through-growing-season/README',
        'life-of-grapevine/anatomy-of-vineyard/README',
        'life-of-grapevine/anatomy-of-vineyard-part-2/README',
        'life-of-grapevine/parts-of-grapevine/README',
        'life-of-grapevine/zoomed-in-parts-of-grapevine/README',
        'life-of-grapevine/annual-growth-cycle-of-grapevine/README',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
