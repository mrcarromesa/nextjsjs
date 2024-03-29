import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import Sidebar from "../components/Sidebar";
import { Header } from "../components/Header";


const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false // nao carrega no lado server, so no client
});

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18T00:00:00.000Z',
      '2021-03-19T00:00:00.000Z',
      '2021-03-20T00:00:00.000Z',
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [
  {
    name: 'series1', data: [31, 120, 10, 28, 61, 18, 109]
  }
];

export default function Dashboard() {
  return(
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />


        {/* minChildWidth = quando for menor ou igual a essa largura ele irá quebrar os items dentro dele em mais linhas */}
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box 
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            // pb="4"
          >
            <Text>Inscritos da semana</Text>
            <Chart 
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>
          <Box 
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          >
            <Text>Taxa de abertura</Text>
            <Chart 
              type="area"
              height={160}
              options={options}
              series={series}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>

  )
}