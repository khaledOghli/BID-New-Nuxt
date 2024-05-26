import type { Meta, StoryObj } from "@storybook/vue3";
import MenuBar from './index.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof MenuBar> = {
  title: "Components/MenuBar",
  component: MenuBar,
  argTypes: {

  },
  args: { },
};

export default meta;

type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
 export const Primary: Story = {
  render: (args) => ({
    components: { MenuBar },
    setup() {
      return { args };
    },
    template: '<MenuBar v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
  },
  parameters: {
    // slots: {
    //   start: {
    //     description: 'Default slot',
    //     template: `<p>{{ args.start }}</p>`,

    //   },
    //   items: {
    //     description: 'Items slot',
    //     template: `<p>{{ args.items }}</p>`,
    //   },
    //   end: {
    //     description: 'Header slot',
    //     template: `<p>{{ args.end }}</p>`,
    //   },
    // },
  },
};

