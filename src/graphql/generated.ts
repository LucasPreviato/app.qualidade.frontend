import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateDepartmentInput = {
  email: Scalars['String'];
  initials: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  unitId: Scalars['Int'];
};

export type CreateUnitInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type Department = {
  __typename?: 'Department';
  email: Scalars['String'];
  id: Scalars['Int'];
  initials: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  unit: Unit;
  unitId: Scalars['Int'];
};

export type DepartmentInput = {
  email: Scalars['String'];
  id: Scalars['Int'];
  initials: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  unit: UnitInput;
  unitId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDepartment: Department;
  createUnit: Unit;
  removeDepartment: Department;
  removeUnit: Unit;
  updateUnit: Unit;
};


export type MutationCreateDepartmentArgs = {
  createDepartmentInput: CreateDepartmentInput;
};


export type MutationCreateUnitArgs = {
  createUnitInput: CreateUnitInput;
};


export type MutationRemoveDepartmentArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUnitArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateUnitArgs = {
  updateUnitInput: UpdateUnitInput;
};

export type Query = {
  __typename?: 'Query';
  department: Department;
  departments: Array<Department>;
  unit: Unit;
  units: Array<Unit>;
};


export type QueryDepartmentArgs = {
  id: Scalars['Int'];
};


export type QueryUnitArgs = {
  id: Scalars['Int'];
};

export type Unit = {
  __typename?: 'Unit';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type UnitInput = {
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone: Scalars['String'];
};

export type UpdateUnitInput = {
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type CreateUnitMutationVariables = Exact<{
  createUnitInput: CreateUnitInput;
}>;


export type CreateUnitMutation = { __typename?: 'Mutation', createUnit: { __typename?: 'Unit', email: string, name: string, id: number, phone: string } };

export type GetDepartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDepartmentsQuery = { __typename?: 'Query', departments: Array<{ __typename?: 'Department', email: string, id: number, initials: string, name: string, phone: string, unitId: number, unit: { __typename?: 'Unit', email: string, id: number, name: string, phone: string } }> };

export type UnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type UnitsQuery = { __typename?: 'Query', units: Array<{ __typename?: 'Unit', email: string, id: number, name: string, phone: string }> };


export const CreateUnitDocument = gql`
    mutation CreateUnit($createUnitInput: CreateUnitInput!) {
  createUnit(createUnitInput: $createUnitInput) {
    email
    name
    id
    phone
  }
}
    `;
export type CreateUnitMutationFn = Apollo.MutationFunction<CreateUnitMutation, CreateUnitMutationVariables>;

/**
 * __useCreateUnitMutation__
 *
 * To run a mutation, you first call `useCreateUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnitMutation, { data, loading, error }] = useCreateUnitMutation({
 *   variables: {
 *      createUnitInput: // value for 'createUnitInput'
 *   },
 * });
 */
export function useCreateUnitMutation(baseOptions?: Apollo.MutationHookOptions<CreateUnitMutation, CreateUnitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUnitMutation, CreateUnitMutationVariables>(CreateUnitDocument, options);
      }
export type CreateUnitMutationHookResult = ReturnType<typeof useCreateUnitMutation>;
export type CreateUnitMutationResult = Apollo.MutationResult<CreateUnitMutation>;
export type CreateUnitMutationOptions = Apollo.BaseMutationOptions<CreateUnitMutation, CreateUnitMutationVariables>;
export const GetDepartmentsDocument = gql`
    query getDepartments {
  departments {
    email
    id
    initials
    name
    phone
    unitId
    unit {
      email
      id
      name
      phone
    }
  }
}
    `;

/**
 * __useGetDepartmentsQuery__
 *
 * To run a query within a React component, call `useGetDepartmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDepartmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDepartmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDepartmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetDepartmentsQuery, GetDepartmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDepartmentsQuery, GetDepartmentsQueryVariables>(GetDepartmentsDocument, options);
      }
export function useGetDepartmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDepartmentsQuery, GetDepartmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDepartmentsQuery, GetDepartmentsQueryVariables>(GetDepartmentsDocument, options);
        }
export type GetDepartmentsQueryHookResult = ReturnType<typeof useGetDepartmentsQuery>;
export type GetDepartmentsLazyQueryHookResult = ReturnType<typeof useGetDepartmentsLazyQuery>;
export type GetDepartmentsQueryResult = Apollo.QueryResult<GetDepartmentsQuery, GetDepartmentsQueryVariables>;
export const UnitsDocument = gql`
    query Units {
  units {
    email
    id
    name
    phone
  }
}
    `;

/**
 * __useUnitsQuery__
 *
 * To run a query within a React component, call `useUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useUnitsQuery(baseOptions?: Apollo.QueryHookOptions<UnitsQuery, UnitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnitsQuery, UnitsQueryVariables>(UnitsDocument, options);
      }
export function useUnitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnitsQuery, UnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnitsQuery, UnitsQueryVariables>(UnitsDocument, options);
        }
export type UnitsQueryHookResult = ReturnType<typeof useUnitsQuery>;
export type UnitsLazyQueryHookResult = ReturnType<typeof useUnitsLazyQuery>;
export type UnitsQueryResult = Apollo.QueryResult<UnitsQuery, UnitsQueryVariables>;