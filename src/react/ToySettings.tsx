import { Button, FormLabel, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, VStack } from "@chakra-ui/react";
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
  } else if (toy === "life") {
    return (
      <>
        <FormLabel>Ruleset</FormLabel>
        <Select
          mb="1em"
          onChange={(e) => {
            toys.life.setRuleset(parseInt(e.target.value));
          }}
          defaultValue="0">
          <option value="0">Original</option>
          <option value="1">High life</option>
          <option value="2">Assimilation</option>
          <option value="3">2 x 2</option>
          <option value="4">Day and Night</option>
          <option value="5">Amoeba</option>
          <option value="6">Move</option>
          <option value="7">Pseudo Life</option>
          <option value="8">Diamoeba</option>
          <option value="9">34</option>
          <option value="10">Long Life</option>
          <option value="11">Stains</option>
          <option value="12">Seeds</option>
          <option value="13">Maze</option>
          <option value="14">Coagulations</option>
          <option value="15">Gnarl</option>
          <option value="16">Replicator</option>
          <option value="17">Mystery</option>
          <option value="18">Star Wars</option>
          <option value="19">Living on the Edge</option>
          <option value="20">Brian 6</option>
          <option value="21">Frogs</option>
          <option value="22">Frogs v2</option>
        </Select>

        <Button
          colorScheme="red"
          onClick={() => {
            toys.life.clearBoard();
          }}>
          Clear Board
        </Button>
      </>
    );
  } else {
    return null;
  }
};

export default ToySettings;
