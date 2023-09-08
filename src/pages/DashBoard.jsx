import {
  Badge,
  Box,
  Card,
  HorizontalStack,
  Page,
  Spinner,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDashBoardDataStatus,
  getDashboard,
  initializeDashBoardData,
} from "../store/dashBoardSlice";

function DashBoard() {
  // const [dashboardData, setDashboardData] = useState(null);
  const dashboardData = useSelector(getDashboard);
  const dataStatus = useSelector(getDashBoardDataStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeDashBoardData());
  }, [dispatch]);
  return (
    <Box padding={5}>
      <Page
        title="Welcome to Ganger App Dashboard"
        primaryAction={{
          content: "Switch Plan",
          url: "/addRegularProduct",
        }}
      >
        {dataStatus === "pending" && (
          <HorizontalStack align="center">
            <Spinner />
          </HorizontalStack>
        )}

        {dataStatus === "rejected" && (
          <HorizontalStack align="center">
            <Badge status="critical" size="large-experimental">
              <Box style={{ padding: "10px 20px" }}>
                <Text alignment="space-between">Unexpected Error occour</Text>
              </Box>
            </Badge>
          </HorizontalStack>
        )}

        {dataStatus === "fulfilled" && (
          <>
            {/* 1st Row */}
            <Card>
              <Text as="p" variant="bodyMd">
                <HorizontalStack>
                  Your Current Plan is &nbsp;
                  <Text as="h2" fontWeight="bold">
                    Starter
                  </Text>
                  . ($59 per month)
                </HorizontalStack>
              </Text>
            </Card>

            {/* 2nd Row */}
            <Box style={{ marginTop: "10px" }}>
              <Card>
                <HorizontalStack align="space-between">
                  <VerticalStack align="center">
                    <Text as="h2" variant="headingMd">
                      Plan Details
                    </Text>
                  </VerticalStack>

                  <Box>
                    <Text as="h2" variant="headingMd">
                      Total Sheets
                    </Text>
                    <Text as="p">
                      {dashboardData?.details?.plan.gang_sheet_limit}
                    </Text>
                  </Box>

                  <Box>
                    <Text as="h2" variant="headingMd">
                      Consumed Sheets
                    </Text>
                    <Text as="p">
                      {dashboardData?.details?.plan.gang_sheet_limit -
                        dashboardData?.details?.remainingSheets}
                    </Text>
                  </Box>

                  <Box>
                    <Text as="h2" variant="headingMd">
                      Remaining Sheets
                    </Text>
                    <Text as="p">
                      {dashboardData?.details?.remainingSheets}
                    </Text>
                  </Box>

                  <Box>
                    <Text as="h2" variant="headingMd">
                      Remaining BG Remover
                    </Text>
                    <Text as="p">
                      {dashboardData?.details?.remainingBgRemover}
                    </Text>
                  </Box>
                </HorizontalStack>
              </Card>
            </Box>

            {/* 3rd Row */}
            {/* 2nd Row */}
            <Box style={{ marginTop: "20px" }}>
              <Card>
                <HorizontalStack align="space-between">
                  <Box>
                    <Text as="h2" variant="headingMd">
                      Total Sale
                    </Text>
                    <Text as="p">
                      ${dashboardData?.details?.shop?.orders_sum_price || 0}
                    </Text>
                  </Box>

                  <Box>
                    <Text as="h2" variant="headingMd">
                      Registered Customers
                    </Text>
                    <Text as="p">
                      {dashboardData?.details?.shop?.customers_count}
                    </Text>
                  </Box>

                  <Box>
                    <Text as="h2" variant="headingMd">
                      Total Orders Place
                    </Text>
                    {dashboardData?.details?.shop?.orders_count}
                    <Text as="p"></Text>
                  </Box>

                  <Box>
                    <Text variant="headingMd" as="h6">
                      Total Products
                    </Text>
                    {dashboardData?.details?.shop?.products_count}
                    <Text as="p"></Text>
                  </Box>
                </HorizontalStack>
              </Card>
            </Box>
          </>
        )}
      </Page>
    </Box>
  );
}

export default DashBoard;
