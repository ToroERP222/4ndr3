import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <Box as="footer" bg="black" color="white" m={50} p={8}>
      <Flex justify="space-between" align="center" wrap="wrap">
        {/* Left side: Text Information */}
        <Box>
          
          <Text fontSize="xs">
            BUILT AND DESIGNED BY <Text as="span" fontWeight="bold">Andre</Text>
          </Text>
        </Box>

        {/* Right side: Social Media Links */}
        <Flex align="center" px={100} gap={6}>
          <Link href="https://dribbble.com" isExternal fontSize="xs" display="flex" alignItems="center">
            Linkedin <ExternalLinkIcon ml={1} />
          </Link>
          <Link href="https://instagram.com" isExternal fontSize="xs" display="flex" alignItems="center">
            INSTAGRAM <ExternalLinkIcon ml={1} />
          </Link>
          <Link href="https://twitter.com" isExternal fontSize="xs" display="flex" alignItems="center">
            Github <ExternalLinkIcon ml={1} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
