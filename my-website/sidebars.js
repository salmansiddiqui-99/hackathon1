// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manual sidebar structure for the Physical AI & Humanoid Robotics book
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro', 'why-physical-ai', 'learning-outcomes'],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1/ros-intro',
        'module-1/nodes-topics-services',
        'module-1/rclpy-integration',
        'module-1/urdf-humanoids',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2/simulation-intro',
        'module-2/physics-simulation',
        'module-2/sensor-simulation',
        'module-2/lidar-depth-cameras-imus',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'module-3/isaac-intro',
        'module-3/isaac-sim-synthetic-data',
        'module-3/isaac-ros-vslam',
        'module-3/nav2-bipedal-navigation',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module-4/vla-intro',
        'module-4/voice-to-action-openai',
        'module-4/llm-planning-ros',
      ],
    },
    {
      type: 'category',
      label: 'Hardware Requirements',
      items: [
        'hardware/intro',
        'hardware/workstation-specs',
        'hardware/jetson-kits',
        'hardware/robot-options',
        'hardware/economy-kit',
        'hardware/latency-considerations',
      ],
    },
    {
      type: 'category',
      label: 'Capstone Project: Autonomous Humanoid',
      items: [
        'capstone/intro',
        'capstone/voice-command',
        'capstone/path-planning',
        'capstone/object-manipulation',
      ],
    },
    {
      type: 'category',
      label: 'Weekly Breakdown',
      items: [
        'weekly/weeks-1-2',
        'weekly/weeks-3-5',
        'weekly/weeks-6-7',
        'weekly/weeks-8-10',
        'weekly/weeks-11-12',
        'weekly/week-13',
      ],
    },
    {
      type: 'category',
      label: 'Assessments',
      items: [
        'assessments/ros-projects',
        'assessments/simulation-pipelines',
        'assessments/capstone-humanoid',
      ],
    },
  ],
};

export default sidebars;
