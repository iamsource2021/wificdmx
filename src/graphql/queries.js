/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWificdmx = /* GraphQL */ `
  query GetWificdmx($id: ID!) {
    getWificdmx(id: $id) {
      id
      programa
      fecha_instalacion
      latitud
      longitud
      colonia
      alcaldia
      createdAt
      updatedAt
    }
  }
`;
export const listWificdmxes = /* GraphQL */ `
  query ListWificdmxes(
    $id: ID
    $filter: ModelWificdmxFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWificdmxes(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        programa
        fecha_instalacion
        latitud
        longitud
        colonia
        alcaldia
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
