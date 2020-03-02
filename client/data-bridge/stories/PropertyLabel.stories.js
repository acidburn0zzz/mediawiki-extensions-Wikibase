import { storiesOf } from '@storybook/vue';
import PropertyLabel from '@/presentation/components/PropertyLabel';

storiesOf( 'PropertyLabel', module )
	.addParameters( { component: PropertyLabel } )
	.add( 'basic', () => ( {
		data: () => ( {
			term: {
				value: 'taxon name',
				language: 'en',
			},
			htmlFor: 'fake-id',
		} ),
		components: { PropertyLabel },
		template:
			`<div>
				<PropertyLabel
					:term="term"
					:htmlFor="htmlFor"
				/>
			</div>`,
	} ) )

	.add( 'long values', () => ( {
		data: () => ( {
			term: {
				value: 'Lorem-ipsum-dolor-sit-amet,-consetetur-sadipscing-elitr,-sed-diam-nonumy-eirmod-tempor-invidunt-ut-labore-et-dolore-magna-aliquyam-erat,-sed-diam-voluptua.-At-vero-eos-et-accusam-et-justo-duo-dolores-et-ea-rebum.-Stet-clita-kasd-gubergren,-no-sea-takimata-sanctus-est-Lorem-ipsum-dolor-sit-amet.-Lorem-ipsum-dolor-sit-amet,-consetetur-sadipscing-elitr,-sed-diam-nonumy-eirmod-tempor-invidunt-ut-labore-et-dolore-magna-aliquyam-erat,-sed-diam-voluptua.-At-vero-eos-et-accusam-et-justo-duo-dolores-et-ea-rebum.-Stet-clita-kasd-gubergren,-no-sea-takimata-sanctus-est-Lorem-ipsum-dolor-sit-amet.-Lorem-ipsum-dolor-sit-amet,-consetetur-sadipscing-elitr,-sed-diam-nonumy-eirmod-tempor-invidunt-ut-labore-et-dolore-magna-aliquyam-erat,-sed-diam-voluptua.-At-vero-eos-et-accusam-et-justo-duo-dolores-et-ea-rebum.-Stet-clita-kasd-gubergren,-no-sea-takimata-sanctus-est-Lorem-ipsum-dolor-sit-amet.', // eslint-disable-line max-len
				language: 'en',
			},
			htmlFor: 'fake-id',
		} ),
		components: { PropertyLabel },
		template:
			`<div>
				<PropertyLabel
					:term="term"
					:htmlFor="htmlFor"
				/>
			</div>`,
	} ) )

	.add( 'empty', () => ( {
		data: () => ( {
			term: {
				value: '',
				language: 'en',
			},
			htmlFor: 'fake-id',
		} ),
		components: { PropertyLabel },
		template:
			`<div>
				<PropertyLabel
					:term="term"
					:htmlFor="htmlFor"
				/>
			</div>`,
	} ) )

	.add( 'right-to-left', () => ( {
		data: () => ( {
			term: {
				value: 'שם מדעי',
				language: 'he',
			},
			htmlFor: 'fake-id',
		} ),
		components: { PropertyLabel },
		template:
			`<div>
				<PropertyLabel
					:term="term"
					:htmlFor="htmlFor"
				/>
			</div>`,
	} ) );
