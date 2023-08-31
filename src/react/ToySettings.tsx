import { FormLabel, Slider, SliderFilledTrack, SliderThumb, SliderTrack, VStack } from "@chakra-ui/react";
import toys from "../gui";

const ToySettings: React.FC<{ toy: string }> = ({ toy }) => {
  if (toy === "rope") {
    return (
      <VStack alignItems="flex-start">
        <FormLabel>Rope Length</FormLabel>
        <Slider
          defaultValue={toys.rope.totalNodes}
          min={5}
          max={100}
          step={1}
          onChange={(value) => {
            toys.rope.setNodes(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <FormLabel>Node Length</FormLabel>
        <Slider
          defaultValue={toys.rope.nodeDistance}
          min={1}
          max={20}
          step={1}
          onChange={(value) => {
            toys.rope.setNodeDistance(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        <FormLabel>Rope Elasticity</FormLabel>
        <Slider
          defaultValue={toys.rope.iterations}
          min={1}
          max={1000}
          step={1}
          onChange={(value) => {
            toys.rope.setIterations(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </VStack>
    );
  } else if (toy === "force") {
    return (
      <>
        <FormLabel>Node Count</FormLabel>
        <Slider
          defaultValue={toys.force.nodeCount}
          min={1}
          max={1000}
          step={1}
          onChange={(value) => {
            toys.force.setNodeCount(value);
          }}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </>
    );
  } else {
    return null;
  }
};

export default ToySettings;
