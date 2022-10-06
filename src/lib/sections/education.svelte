<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from './refs';
	import CurvedDivider from '$lib/components/curvedDivider.svelte';
	import { _ } from 'svelte-i18n';
</script>

<CurvedDivider />
<div id="content" use:scrollRef={refs.education}>
	<h1>{$_('education.title')}</h1>
	<p>THIS (website) IS STILL WIP</p>
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt eos commodi delectus
		quisquam quibusdam consequuntur. Quasi rem eligendi eius corrupti laudantium assumenda odit
		modi? Molestias a corrupti error enim, fugit fuga unde? Magnam cumque quam dignissimos qui! Ut
		eaque iste illum sequi recusandae laboriosam laborum nisi alias, asperiores libero ratione,
		deleniti dolorem reprehenderit unde eos! Doloremque incidunt neque libero veritatis corporis ad
		assumenda, voluptatum est nisi. Est provident officia facilis nihil fugit error tempora ipsam
		sint, minima nobis. Corrupti accusamus beatae assumenda, sed ea, eius quos numquam iusto
		delectus consectetur, earum molestias fuga aperiam corporis non officia quo similique reiciendis
		rerum vel id nulla optio neque. Nemo unde molestiae porro eveniet corrupti, molestias beatae qui
		quod veritatis fugiat iste eaque harum laboriosam, laudantium libero esse cumque quae numquam
		expedita ratione impedit, repudiandae accusantium? Iusto dolorem accusantium blanditiis laborum
		quae? Delectus similique illum quo odio libero id corporis rerum rem blanditiis voluptatum
		aperiam temporibus error tempora reprehenderit, quidem tempore quisquam sunt ea. At nesciunt
		veniam, velit consectetur eos voluptate, quos recusandae ex, enim hic totam amet dolore tempore.
		Non velit accusamus optio nobis minima qui consequatur quasi voluptates id nisi sequi officiis
		consectetur, laboriosam dolor, eos, quae voluptate blanditiis incidunt tempora cumque
		accusantium ex quia debitis? In, quos maiores? Aperiam fugiat dolorem officia dolor, quibusdam
		ducimus totam nobis earum consequatur voluptatum repellat fuga quo rerum expedita quidem
		voluptas autem culpa porro praesentium vel, cum explicabo sint! Possimus ipsum vel tempora
		blanditiis error sapiente quis similique, sunt corrupti accusantium, vero id animi tempore totam
		fuga ratione cum aliquam debitis deserunt sed? Earum blanditiis a non obcaecati. Minus
		dignissimos voluptate repellendus tempore quam aliquam necessitatibus soluta. Rerum iusto
		accusamus cum vitae repellat possimus consectetur atque dicta est inventore. Quidem numquam
		aliquid, deserunt quo consequatur neque tenetur saepe beatae nisi suscipit deleniti eius! Iste
		modi, maxime ea error consectetur natus non, porro molestias eaque impedit placeat, iure amet.
		Nemo sint vel consequuntur id molestiae excepturi, nisi iure eos velit rerum animi maxime
		possimus sapiente explicabo quia voluptates nesciunt assumenda eius magnam! Porro, laborum esse
		neque voluptate ab ratione sapiente tempora ducimus fugiat, dolorum illo animi? Consequatur ad
		quisquam nobis ut ipsam tenetur ea quos omnis ratione nisi, error perspiciatis delectus soluta
		et eos aut incidunt corporis sed? Architecto nesciunt consequuntur eum ducimus? Vitae
		praesentium vel ullam eveniet, tempora quis voluptatum aperiam consequatur, quisquam delectus
		neque alias tenetur sequi iure nisi itaque provident omnis perspiciatis ipsa repudiandae minima.
		Minus quidem veniam quod voluptatum, placeat temporibus libero debitis recusandae atque itaque.
		Voluptas asperiores blanditiis debitis sunt impedit, veniam id! Harum, tenetur natus veniam
		perspiciatis esse unde dolores amet quibusdam, inventore doloremque quae iure aliquam distinctio
		quas voluptas minus veritatis vero. Velit quis quas repudiandae illo possimus! Beatae adipisci
		odit quas nobis ipsam quos doloremque iusto, quibusdam consequatur officia minima ad totam id
		atque suscipit, blanditiis voluptas tempore hic. Aut, itaque nostrum? Voluptate ab consectetur
		animi sequi obcaecati. Dignissimos obcaecati qui temporibus autem voluptatem enim perferendis
		optio soluta. Exercitationem minus et alias facilis reiciendis, quibusdam qui?
	</p>
</div>
<div class="flipped">
	<CurvedDivider />
</div>

<style lang="scss">
	* {
		padding: $std-margin;
	}
	#content {
		padding: 2*$std-margin;
		@include full-bleed($bg-color: $surface);
		// margin:-10%;
		background-color: $surface;
		// backdrop-filter: invert(1);
		filter: invert(1);
	}
	.flipped {
		transform: rotate(180deg);
		padding-top: calc(4 * $std-margin);
        margin-bottom: -10px;
	}
</style>
