# svelte navbar

well, as the name suggest this package provides a [svelte](https://svelte.dev)-component that would be used as a navbar.

## Installation

`npm i svelte-navbar`

## Usage

```svelte
<script lang="ts">
    import Navbar, {NavbarItem} from 'svelte-navbar';
</script>

<Navbar>
    <NavbarItem on:click={(e) => scrollTop()}>Home</NavbarItem>
    <NavbarItem on:click={(e) => routeToPage('shop', false)}>Shop</NavbarItem>
</Navbar>
```

## API

this is still WIP

## Example

an example can be found [here](https://hannesgith.github.io/) with implementation [here](https://github.com/HannesGitH/HannesGitH.github.io/blob/v2/src/routes/%2Bpage.svelte)
