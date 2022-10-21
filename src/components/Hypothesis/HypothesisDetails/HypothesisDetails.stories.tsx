import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { sampleIncidentNode } from "../../../data/sampleIncident";
import { HypothesisDetails } from "./index";

export default {
  title: "HypothesisDetails",
  component: HypothesisDetails,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ],
  parameters: { actions: { argTypesRegex: "^on.*" } }
} as ComponentMeta<typeof HypothesisDetails>;

const Template: ComponentStory<typeof HypothesisDetails> = (arg: any) => (
  <HypothesisDetails {...arg} />
);

export const Base = Template.bind({});

Base.args = {
  node: sampleIncidentNode
};
