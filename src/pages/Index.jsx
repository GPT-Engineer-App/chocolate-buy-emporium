import { Box, Heading, Text, Image, Button, Flex, Grid } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1520811288788-6f2e3da049e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTcxMjQzMTk0N3ww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" py={40}>
        <Heading as="h1" size="4xl" color="white" textAlign="center">
          Indulge in Handcrafted Chocolate
        </Heading>
        <Text fontSize="2xl" color="white" textAlign="center" mt={4}>
          Discover our exquisite collection of artisanal chocolates
        </Text>
        <Flex justify="center" mt={8}>
          <Button colorScheme="orange" size="lg">
            Shop Now
          </Button>
        </Flex>
      </Box>

      {/* Featured Products */}
      <Box p={10}>
        <Heading as="h2" size="2xl" mb={8}>
          Featured Chocolates
        </Heading>
        <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap={8}>
          {[1, 2, 3].map((product) => (
            <Box key={product} borderWidth={1} borderRadius="lg" overflow="hidden">
              <Image src={`https://images.unsplash.com/photo-1616401776146-ae3453da7105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBwcm9kdWN0JTIwJTI0JTdCcHJvZHVjdCU3RHxlbnwwfHx8fDE3MTI0MzE5NDd8MA&ixlib=rb-4.0.3&q=80&w=1080`} alt="Chocolate Product" />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  Chocolate Product {product}
                </Heading>
                <Text>Delectable handmade chocolate with premium ingredients.</Text>
                <Button colorScheme="orange" size="md" mt={4} rightIcon={<FaShoppingCart />}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* About Us */}
      <Box bgColor="gray.100" p={10}>
        <Flex direction={["column", "row"]} align="center">
          <Box flex={1} mr={[0, 10]}>
            <Heading as="h2" size="2xl" mb={4}>
              About Our Chocolate
            </Heading>
            <Text fontSize="lg">We take pride in crafting the finest chocolates using traditional techniques and the best ingredients sourced from around the world. Each piece is made with passion and care to deliver a truly indulgent experience.</Text>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1579523609100-5b868b803668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBtYWtpbmclMjBwcm9jZXNzfGVufDB8fHx8MTcxMjQzMTk0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Chocolate Making" borderRadius="lg" />
          </Box>
        </Flex>
      </Box>

      {/* Call to Action */}
      <Box bgColor="orange.500" py={20}>
        <Heading as="h2" size="3xl" color="white" textAlign="center" mb={8}>
          Ready to Indulge?
        </Heading>
        <Flex justify="center">
          <Button colorScheme="white" size="lg">
            Start Shopping
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
