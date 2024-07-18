"use client";
import { Box, Text, Flex, Select } from "@chakra-ui/react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface SubscriberCardProps {
  title: string;
  data: number[];
  labels: string[];
}

const SubscriberCard: React.FC<SubscriberCardProps> = ({
  title,
  data,
  labels,
}) => {
  const [selectedDay, setSelectedDay] = useState(4); // Assuming 4 is the index for "Friday"

  const maxDataValue = Math.max(...data);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Background",
        data: Array(data.length).fill(maxDataValue), // Max value for all bars
        backgroundColor: "rgba(29, 141, 71, 0.1)", // Faint background color
        borderRadius: 20,
        // barPercentage: 0.8,
        // categoryPercentage: 0.6,
      },
      {
        label: "Subscribers",
        data,
        backgroundColor: "#1D8D47",
        borderColor: "rgba(34, 202, 102, 1)",
        borderWidth: 1,
        borderRadius: 20,
        barPercentage: 0.8,
        categoryPercentage: 0.6,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        title: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
    //   boxShadow="md"
      width="345px"
      height="492px"
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Text
          fontSize="18px"
          fontWeight="500"
          color="#303030"
          lineHeight="21.78px"
        >
          {title}
        </Text>
        <Select
          size="sm"
          w="auto"
          border="none"
          fontSize="12px"
          color="#939393"
          fontWeight="500"
          lineHeight="14.52px"
          onChange={(e) => setSelectedDay(parseInt(e.target.value, 10))}
        >
          <option value={0}>This Week</option>
          {/* Add more options as needed */}
        </Select>
      </Flex>
      <Box bg="#F5F5F5" p={2} borderRadius="10px" mb={4}>
        <Flex justify="space-between">
          <Text
            color="#303030"
            fontSize="14px"
            fontWeight="500"
            lineHeight="16.94px"
          >
           Friday
          </Text>
          <Text
            color="#303030"
            fontSize="14px"
            fontWeight="500"
            lineHeight="16.94px"
          >
            {data[selectedDay].toLocaleString()} subscribers
          </Text>
        </Flex>
      </Box>
      <Box height="300px" mt={'20'}>
        <Bar data={chartData} options={options} />
      </Box>
    </Box>
  );
};

export default SubscriberCard;
