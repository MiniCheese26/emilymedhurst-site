<script lang='ts'>
  import Block from '$lib/sections/Block.svelte';
  import Section from '$lib/Section.svelte';
  import {onMount} from 'svelte';

  let container: HTMLDivElement;

  onMount(() => {
    if (container && container.children.length % 2 !== 0) {
      const lastChild = container.lastElementChild;

      lastChild.classList.add('md:col-span-2');
    }
  });
</script>

<Section title='Portfolio'>
  <div bind:this={container} class='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 md:gap-y-2'>
    <Block title='Scrabble Coursework' description='First year university coursework where I designed and created an online browser-based Scrabble game.'
           link='https://github.com/MiniCheese26/scrabble-coursework' crumbs={['react', 'typescript', 'express', 'websockets']}/>
    <Block title='Brick Store Coursework' description='Second year university coursework where I designed and created an online storefront for a lego brick store'
           link='https://github.com/MiniCheese26/brick-store-coursework' crumbs={['typescript', 'fastify', 'auth0', 'postgresql']}/>
    <Block title='Company Address Tracker' description='A prototype desktop tool I made for a local company to manage company addresses.'
           link='https://github.com/MiniCheese26/company-address-tracker' crumbs={['typescript', 'electron', 'react']}/>
    <Block title='Basic Matrix.org Bot Library' description='A basic library I wrote for writing basic bots for Matrix.org chats in C#.'
           link='https://github.com/MiniCheese26/loc0CoreMatrixClient' crumbs={['C#', 'outdated']}/>
  </div>
</Section>
