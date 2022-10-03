<script lang="ts">
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import ScrollToTopButton from '$lib/components/scrollToTopButton.svelte';
	import NavbarItem from '$lib/components/navbar/navbarItem.svelte';
	import { scrollTop } from 'svelte-scrolling';
	import { goto } from '$app/navigation';

	const navBarScroll = {
		startY: 100,
		endY: 500,
		get length() {
			return this.endY - this.startY;
		},
		progress: function (scroll: number) {
			return Math.min(Math.max(0,scrollY - this.startY) / this.length, 1);
		}
	};

	let scrollY = 0;
	
	function routeToPage(route: string, replaceState: boolean) {
		goto(`/${route}`, { replaceState });
	};
</script>

<Navbar scrollProgress={navBarScroll.progress(scrollY)}>
	<NavbarItem on:click={(e) => scrollTop()}>Home</NavbarItem>
	<NavbarItem on:click={(e) => routeToPage('icon', false)}>/Icon</NavbarItem>
</Navbar>
<ScrollToTopButton />
<p style="">
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis quam vel quasi dolorum
	fugiat id veniam dolor ducimus aliquam necessitatibus sunt tempore rerum expedita blanditiis
	exercitationem debitis culpa ut laboriosam deserunt, corrupti possimus placeat dolore itaque.
	Voluptate odio similique ipsam dolorum omnis modi ullam voluptatum quis quibusdam tenetur, maiores
	fugit, sunt aliquid consequuntur quod recusandae. Illo non aut similique eos quo, nisi qui. Quos
	eligendi suscipit quod possimus laudantium unde velit corrupti aliquid, eos nobis harum est
	molestiae sed consequuntur architecto commodi, explicabo optio, distinctio voluptate recusandae.
	Quae nulla adipisci pariatur tenetur quidem hic reiciendis! Quo, nemo! Omnis laboriosam delectus
	ad magni! Quam dolor ullam assumenda possimus exercitationem similique dolores consequuntur
	adipisci ut quasi quaerat aliquid, fuga laudantium quibusdam recusandae, unde quisquam alias
	deleniti ea minus consequatur ipsam aliquam? Voluptas minus illum nemo facere consequatur,
	repellat animi non magni reiciendis praesentium commodi! Nisi vitae quam animi expedita porro quas
	tenetur facilis reprehenderit ipsam. Voluptatem consectetur nam modi repellendus sit ipsum quis
	officiis saepe quae laboriosam id pariatur, expedita omnis ex. Fuga atque cum praesentium odio
	explicabo, voluptates quaerat, rem ut consequatur accusantium, numquam ea quod deleniti mollitia
	nemo sed incidunt doloremque. Aspernatur iste natus quaerat velit doloremque veritatis placeat
	molestiae molestias odio officiis a illum id, quasi similique eligendi. Obcaecati autem laboriosam
	ullam aliquid quos officia quas maiores praesentium quaerat nulla aspernatur repudiandae quidem
	quibusdam, dolor iusto? Incidunt vel eius, repellat natus provident libero ipsum, modi veniam
	alias dolorum iusto eum impedit minima, reiciendis tempora blanditiis. Animi quisquam accusantium
	totam harum et. Veniam atque, ea tempore eos magni, error veritatis alias tempora aperiam nisi
	facilis, ex officia mollitia laboriosam neque accusantium pariatur consequatur modi dolor porro.
	Non necessitatibus nam ab tenetur architecto officiis incidunt, dignissimos cumque id nisi.
	Veniam, iure facere fugiat deleniti dolorem voluptates dicta quia iste nesciunt illo assumenda
	architecto laudantium distinctio earum eaque repellendus et itaque. Eius eum, ex nihil magnam
	laborum dolor consequuntur adipisci nulla expedita deserunt saepe commodi quidem possimus ratione
	nobis modi sed iusto. Iste quas eum dignissimos aut hic inventore vero illum sunt, optio, at
	tempore modi distinctio veritatis repellendus ea laudantium asperiores vitae illo praesentium
	quos. A, aperiam. Quis et commodi dolores ipsam? Saepe fugiat possimus expedita dolor impedit,
	temporibus placeat aliquam voluptate tempora neque error. Nostrum quis minus iure architecto
	itaque accusamus quos exercitationem repudiandae necessitatibus esse. Unde, officia expedita
	numquam accusantium asperiores quod sit mollitia quae, culpa molestias sapiente. Et cum dolorum
	officia modi nisi dolorem eius veniam sequi possimus eligendi libero, nihil, quaerat molestiae
	exercitationem consequatur nemo sunt ducimus minus ipsum harum rem. Sapiente deleniti neque ab
	laboriosam rem inventore magnam commodi voluptates assumenda nihil veniam alias illum
	exercitationem maiores dignissimos itaque harum perspiciatis veritatis, a suscipit? Ratione,
	dolores unde, eligendi porro modi quos quidem aut earum animi esse qui odit rerum voluptatum
	veniam sapiente nesciunt ea maxime repellendus laudantium. Esse dolor magnam quod optio recusandae
	cupiditate vitae delectus harum soluta dolorem asperiores nostrum nisi hic tempora, cumque
	explicabo amet. Veritatis enim aperiam id, fugiat doloribus iure atque excepturi, aliquid rerum
	aspernatur sequi saepe est deserunt maiores ipsa laboriosam veniam. Saepe libero laborum amet
	doloribus quisquam, non laudantium, beatae quasi labore, illum mollitia tempora reprehenderit
	neque. Magnam tenetur provident earum eaque, veniam quo asperiores odit. Molestias atque,
	distinctio quibusdam, maxime expedita eligendi laborum alias corporis accusantium rem voluptatem
	illum reiciendis non consequatur nobis nisi inventore. Nisi odit saepe laudantium hic optio sequi
	beatae, soluta modi eum fuga praesentium magnam vero quisquam aut maiores ducimus enim magni nobis
	ratione et qui voluptatem officiis. Assumenda veritatis, tempore natus iusto aliquid asperiores
	quaerat rerum dolorum minima dolor totam cumque nihil esse ullam corporis vel aspernatur mollitia
	error numquam, dolorem quibusdam eaque recusandae. Neque, perferendis! Vitae tenetur cupiditate
	reprehenderit voluptates quisquam debitis veritatis fugiat ex! Laboriosam ad maiores sequi
	voluptas autem molestias aut perspiciatis! Quasi atque suscipit aperiam eius, deserunt mollitia
	nam. Ratione veniam voluptates, iste delectus excepturi ducimus hic corporis temporibus doloremque
	nesciunt consectetur, deleniti quae! Fuga expedita iusto, earum consectetur velit ratione delectus
	assumenda magni deserunt perspiciatis veniam sit explicabo. Voluptatem nobis veritatis corporis
	excepturi eos sunt amet ipsum. Nam exercitationem aspernatur doloremque facere molestias, velit
	sapiente quis voluptates quisquam vel cupiditate suscipit ratione at sequi quibusdam, quia
	tempora, perspiciatis vero eius nesciunt quod consectetur repellendus. Quibusdam molestias optio
	beatae illo. Voluptatum obcaecati cupiditate quod quo eos error perspiciatis, ut harum perferendis
	commodi ipsam molestias autem soluta! Accusamus ratione corrupti nobis hic itaque soluta explicabo
	vero, dolorum dignissimos animi fuga harum officia, voluptate, quisquam maxime laborum aperiam
	eveniet assumenda sequi? Suscipit amet corporis fugiat rem, et nobis animi qui laboriosam dolorem?
	Cumque consectetur delectus amet rerum eaque! Aspernatur possimus fugiat sapiente dolores numquam
	doloribus dolorum earum optio corrupti! Unde eaque, totam fugit soluta enim esse harum? A eos
	dolorem consequatur impedit, aperiam itaque eum corporis? Alias ipsum ratione totam magni deserunt
	libero id accusantium vitae tempore earum quae quos rerum, facilis, quia illo animi laboriosam
	beatae deleniti! Molestiae veniam quos placeat esse itaque explicabo ullam totam. Eligendi,
	assumenda ducimus quibusdam quos culpa harum illum doloremque non debitis dolore id, molestiae
	sunt incidunt omnis, voluptas qui vero in explicabo quisquam optio ab perferendis! Minima maiores
	quasi consequuntur aliquam atque. Soluta cumque nesciunt recusandae vero exercitationem, minima
	doloribus veniam id laborum perspiciatis explicabo velit, aliquid enim veritatis minus nemo nisi
	corrupti iusto culpa repellat? Dolore amet voluptate veniam? Ea vero labore dicta odio animi.
	Culpa illo, quam, sapiente modi sunt totam cum voluptatem sequi possimus, expedita porro. Corrupti
	eos aspernatur esse! Cum consectetur cumque fuga magnam rem assumenda est esse blanditiis
	molestias sed, amet ea veniam qui enim omnis nobis. Accusamus odit similique ipsam inventore neque
	earum eos magnam, minus aliquid cupiditate sapiente sint obcaecati delectus quo placeat, veniam
	praesentium eaque harum at! Eligendi provident quod laudantium dolores placeat cupiditate odio ut
	nostrum, temporibus tempore. Dicta porro eius iusto sequi temporibus rerum, facere incidunt quae
	culpa quod sapiente magnam corrupti similique dolor neque quos eum fugiat cupiditate repellendus
	vitae sunt, voluptate, saepe error. Libero impedit id earum itaque possimus minima. Libero,
	temporibus!
</p>

<svelte:window bind:scrollY />

<style lang="scss">
	:global(body, html) {
		color: $on-surface;
	}
</style>
