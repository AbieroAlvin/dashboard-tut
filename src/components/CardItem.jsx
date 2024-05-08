import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card
      className="mx-auto max-w-full"
      decoration="top"
      decorationColor="indigo"
    >
      <Flex justifyContent="between" alignItems="center">
        <Text className="">Sales</Text>
        <BadgeDelta deltaType="moderateIncrease">+12.5%</BadgeDelta>
      </Flex>
      <Metric className="">$ 34,743</Metric>
    </Card>
  );
};

export default CardItem;
