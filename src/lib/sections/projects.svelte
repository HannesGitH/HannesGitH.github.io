<script lang="ts">
	import { scrollRef } from 'svelte-navbar';
	import refs from './refs';
	import { _ } from 'svelte-i18n';
	//TODO: https://codepen.io/HannesGitH/pen/dyeQNQw (von education aus kommend schon)
</script>

<div id="content" use:scrollRef={refs.projects}>
	<h1>{$_('projects.title')}</h1>

	<p>i'll fill in what i've done so far soon, but in the mean time feel free to checkout my <a href="https://github.com/HannesGitH">Github</a> and <a href="https://play.google.com/store/apps/developer?id=Hannepps">Play-Store entries</a></p>

	<!-- <p>my newest project can be seen <a href="//sprit.vercel.app">here</a></p> -->
	<!-- <p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita eius ipsa impedit minima
		pariatur eum dolore quas veniam, doloribus aut consectetur distinctio sed sint deserunt
		voluptates facere nisi ducimus dolores explicabo totam. Unde ex libero, et deserunt voluptates
		sit, est nesciunt pariatur iure ea inventore officiis vero rerum. Cupiditate ea dolorum animi
		incidunt possimus explicabo, maiores inventore iure iusto reiciendis sint, sed, quo asperiores
		quibusdam nostrum consectetur cumque! Accusamus consequatur quod dolore quis, ipsa architecto
		enim quidem perspiciatis nostrum optio rerum ad debitis modi laboriosam eum sint eos at beatae
		sapiente. Vel alias facilis omnis quae dolore quod delectus tenetur perferendis! Aliquid ratione
		pariatur sequi. Assumenda ratione aspernatur nihil nemo minus, inventore laudantium ex. Sunt in
		quo saepe unde nisi aperiam eius assumenda deleniti ratione ducimus, eos exercitationem esse
		optio, minima voluptatibus nam tempore nihil officiis explicabo? Et consequatur cupiditate
		sapiente. Consequuntur ad laudantium recusandae, molestiae, illum architecto, quo quas quasi
		esse praesentium vel accusantium eos ex cum? Corporis nemo eveniet sapiente repudiandae repellat
		ex dolores, nesciunt, consequuntur incidunt aliquam quas consectetur eum? Commodi quos quibusdam
		dolorem corrupti culpa fugiat aliquid eum atque facilis ea possimus, dicta laboriosam quis et
		harum officia non accusantium expedita libero, minima perspiciatis saepe maxime assumenda?
		Aperiam repudiandae cumque quidem nostrum officia quisquam quas saepe ex labore praesentium ipsa
		ipsum atque quibusdam recusandae corrupti tenetur adipisci rem, cum voluptatem quod, asperiores
		impedit mollitia totam. Voluptate expedita porro repudiandae dolorum assumenda excepturi
		molestias ipsum itaque inventore officiis iusto cumque minima voluptatibus enim, reiciendis id
		natus deleniti, tempore voluptatem ullam quis est in maiores! Quibusdam autem, id distinctio
		praesentium a est ipsum necessitatibus vero possimus saepe dicta quis atque modi voluptate
		reprehenderit perferendis fuga numquam accusamus odio, iure velit suscipit at? Inventore nihil
		fugit illum? Temporibus natus velit fuga necessitatibus hic? Atque suscipit voluptate aliquam
		sunt, iste architecto odio consequatur, neque illum ex repudiandae obcaecati debitis id nemo
		pariatur dolorum cumque. Cupiditate, rerum! Ipsa itaque nulla culpa cum nam neque atque saepe
		ipsum, voluptatum consequatur dolorum dicta qui, pariatur voluptatibus deleniti similique animi
		reprehenderit earum omnis alias quia cumque quo ex? Ullam tenetur repudiandae deleniti quidem
		rerum repellat eius voluptatem commodi ratione dicta obcaecati ipsum voluptas aut esse
		laboriosam veritatis voluptate inventore ipsa mollitia architecto, fuga debitis. Maxime rem
		suscipit libero, veritatis fuga explicabo ad accusantium quaerat qui nihil, expedita placeat
		corporis exercitationem vitae aliquam. Harum dolor iste cumque optio repellat, aut natus
		delectus ex, dolore libero, cupiditate sit voluptatem adipisci hic nihil? Dolore molestiae
		beatae modi consectetur necessitatibus, soluta laborum dolores eos, fugiat sint voluptatem magni
		corrupti enim labore in ut recusandae assumenda? Quas, illo. Pariatur omnis atque nesciunt
		reiciendis tempore quas harum modi, repellat quisquam corrupti expedita qui culpa assumenda nemo
		quos, eveniet unde rem temporibus. Eius eligendi, temporibus optio est magnam voluptate nemo
		enim, sunt animi ullam eum eveniet consectetur! Atque minima sint qui corrupti adipisci,
		pariatur similique exercitationem perferendis iste aliquam quas vero rerum, dolore maiores
		maxime ea est tempore libero enim eos laborum sed a. Eaque numquam quidem exercitationem nisi
		eius!
	</p> -->
</div>

<style lang="scss">
	* {
		padding: $std-margin;
	}
	#content {
		padding-top: $std-margin;
		@include full-bleed($bg-color: $surface);
		// margin:-10%;
		// background-color: $surface;
		// backdrop-filter: invert(1);
		// filter: invert(1);
	}
</style>
