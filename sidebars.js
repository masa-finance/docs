/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "doc",
      id: "welcome-to-masa/welcome-to-masa", 
    },
    {
      type: "category",
      label: "Masa Bittensor Subnet",
      link: {
        type: "doc",
        id: "masa-subnet/welcome",
      },
      items: [
        {
          type: "category",
          label: "Masa Bittensor Validator",
          link: {
            type: "doc",
            id: "masa-subnet/validator/intro",
          },
          items: [
            "masa-subnet/validator/1-create-environment",
            "masa-subnet/validator/2-clone-repository",
            "masa-subnet/validator/3-create-wallet",
            "masa-subnet/validator/3-regen-wallet",
            "masa-subnet/validator/4-fund-wallet",
            "masa-subnet/validator/5-register-wallet",
            "masa-subnet/validator/6-stake-validator",
            "masa-subnet/validator/7-set-weights",
            "masa-subnet/validator/8-run-protocol",
            "masa-subnet/validator/9-edit-env",
            "masa-subnet/validator/10-run-validator",
          ],
        },
        {
          type: "category",
          label: "Masa Bittensor Miner",
          link: {
            type: "doc",
            id: "masa-subnet/miner/intro",
          },
          items: [
            "masa-subnet/miner/1-create-environment",
            "masa-subnet/miner/2-clone-repository",
            "masa-subnet/miner/3-create-wallet",
            "masa-subnet/miner/3-regen-wallet",
            "masa-subnet/miner/4-fund-wallet",
            "masa-subnet/miner/5-register-wallet",
            "masa-subnet/miner/6-run-protocol",
            "masa-subnet/miner/7-edit-env",
            "masa-subnet/miner/8-run-miner",
          ],
        },
        {
          type: "doc",
          label: "Latest Release Notes",
          id: "masa-subnet/RELEASE_NOTES",
        },
      ],
    },
    {
      type: "category",
      label: "Masa Protocol",
      link: {
        type: "doc",
        id: "masa-protocol/welcome",
      },
      items: [
        {
          type: "category",
          label: "Node Setup",
          link: {
            type: "generated-index",
            title: "Node Setup",
          },
          items: [
            "masa-protocol/protocol-binary-installation",
            "masa-protocol/protocol-docker-setup",
            "masa-protocol/protocol-digital-ocean-setup",
          ],
        },
        {
          type: "category",
          label: "Node Staking",
          link: {
            type: "generated-index",
            title: "Node Staking",
          },
          items: [
            "masa-protocol/protocol-staking-guide",
          ],
        },
        {
          type: "category",
          label: "Scraper Configuration",
          link: {
            type: "generated-index",
            title: "Node Configuration",
          },
          items: [
            "masa-protocol/protocol-twitter-scraper-config",
            "masa-protocol/protocol-web-scraper-config",
            "masa-protocol/protocol-discord-scraper-config",
            "masa-protocol/protocol-telegram-scraper-config",
          ],
        },
        {
          type: "category",
          label: "Developer Configuration",
          link: {
            type: "generated-index",
            title: "Developer Node",
          },
          items: [
            "masa-protocol/protocol-staking-guide",
            "masa-protocol/protocol-developer-config",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
