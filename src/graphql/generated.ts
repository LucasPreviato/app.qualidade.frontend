import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Collaborator = {
  __typename?: 'Collaborator'
  createdAt: Scalars['DateTime']
  department: ResolveDepartments
  email: Scalars['String']
  hireDate: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
  phone?: Maybe<Scalars['String']>
  position: ResolvePositions
  unit: ResolveUnit
}

export type CreateCollaboratorInput = {
  departmentId: Scalars['Int']
  email: Scalars['String']
  name: Scalars['String']
  phone?: InputMaybe<Scalars['String']>
  positionId: Scalars['Int']
  unitId: Scalars['Int']
}

export type CreateDepartmentInput = {
  email?: InputMaybe<Scalars['String']>
  initials?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  unitId?: InputMaybe<Scalars['Int']>
}

export type CreatePositionCategoryInput = {
  name: Scalars['String']
}

export type CreatePositionInput = {
  alterations: Scalars['String']
  desiredEducation?: InputMaybe<Scalars['String']>
  desiredExperience?: InputMaybe<Scalars['String']>
  desiredQualifications?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  positionCategoryId: Scalars['Int']
  requiredEducation?: InputMaybe<Scalars['String']>
  requiredExperience?: InputMaybe<Scalars['String']>
  requiredQualifications?: InputMaybe<Scalars['String']>
  revisionAt: Scalars['DateTime']
  version: Scalars['Int']
}

export type CreateUnitInput = {
  email?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  phone?: InputMaybe<Scalars['String']>
}

export type Department = {
  __typename?: 'Department'
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  id: Scalars['Int']
  initials?: Maybe<Scalars['String']>
  name: Scalars['String']
  unit?: Maybe<ResolveUnit>
}

export type Mutation = {
  __typename?: 'Mutation'
  createCollaborator: Collaborator
  createDepartment: Department
  createPosition: Position
  createPositionCategory: PositionCategory
  createUnit: Unit
  removeCollaborator: Collaborator
  removeDepartment: Department
  removePosition: Position
  removePositionCategory: PositionCategory
  removeUnit: Unit
  updateCollaborator: Collaborator
  updateDepartment: Department
  updatePosition: Position
  updatePositionCategory: PositionCategory
  updateUnit: Unit
  uploadFile: Scalars['Boolean']
}

export type MutationCreateCollaboratorArgs = {
  createCollaboratorInput: CreateCollaboratorInput
}

export type MutationCreateDepartmentArgs = {
  createDepartmentInput: CreateDepartmentInput
}

export type MutationCreatePositionArgs = {
  createPositionInput: CreatePositionInput
}

export type MutationCreatePositionCategoryArgs = {
  createPositionCategoryInput: CreatePositionCategoryInput
}

export type MutationCreateUnitArgs = {
  createUnitInput: CreateUnitInput
}

export type MutationRemoveCollaboratorArgs = {
  id: Scalars['Int']
}

export type MutationRemoveDepartmentArgs = {
  id: Scalars['Int']
}

export type MutationRemovePositionArgs = {
  id: Scalars['Int']
}

export type MutationRemovePositionCategoryArgs = {
  id: Scalars['Int']
}

export type MutationRemoveUnitArgs = {
  id: Scalars['Int']
}

export type MutationUpdateCollaboratorArgs = {
  updateCollaboratorInput: UpdateCollaboratorInput
}

export type MutationUpdateDepartmentArgs = {
  updateDepartmentInput: UpdateDepartmentInput
}

export type MutationUpdatePositionArgs = {
  updatePositionInput: UpdatePositionInput
}

export type MutationUpdatePositionCategoryArgs = {
  updatePositionCategoryInput: UpdatePositionCategoryInput
}

export type MutationUpdateUnitArgs = {
  updateUnitInput: UpdateUnitInput
}

export type MutationUploadFileArgs = {
  args: Scalars['String']
}

export type Position = {
  __typename?: 'Position'
  alterations: Scalars['String']
  collaborator: ResolveCollaborators
  createdAt: Scalars['DateTime']
  desiredEducation?: Maybe<Scalars['String']>
  desiredExperience?: Maybe<Scalars['String']>
  desiredQualifications?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  positionCategory: ResolvePositionCategories
  requiredEducation?: Maybe<Scalars['String']>
  requiredExperience?: Maybe<Scalars['String']>
  requiredQualifications?: Maybe<Scalars['String']>
  revisionAt: Scalars['DateTime']
  version: Scalars['Int']
}

export type PositionCategory = {
  __typename?: 'PositionCategory'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
  positions?: Maybe<Array<ResolvePositions>>
}

export type Query = {
  __typename?: 'Query'
  collaborator: Collaborator
  collaborators: Array<Collaborator>
  department: Department
  departments: Array<Department>
  position: Position
  positionCategories: Array<PositionCategory>
  positionCategory: PositionCategory
  positions: Array<Position>
  unit: Unit
  units: Array<Unit>
}

export type QueryCollaboratorArgs = {
  id: Scalars['Int']
}

export type QueryDepartmentArgs = {
  id: Scalars['Int']
}

export type QueryPositionArgs = {
  id: Scalars['Int']
}

export type QueryPositionCategoryArgs = {
  id: Scalars['Int']
}

export type QueryUnitArgs = {
  id: Scalars['Int']
}

export type ResolveCollaborators = {
  __typename?: 'ResolveCollaborators'
  createdAt: Scalars['DateTime']
  email: Scalars['String']
  hireDate: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
  phone?: Maybe<Scalars['String']>
}

export type ResolveDepartments = {
  __typename?: 'ResolveDepartments'
  createdAt: Scalars['DateTime']
  email?: Maybe<Scalars['String']>
  id: Scalars['Int']
  initials?: Maybe<Scalars['String']>
  name: Scalars['String']
}

export type ResolvePositionCategories = {
  __typename?: 'ResolvePositionCategories'
  createdAt: Scalars['DateTime']
  id: Scalars['Int']
  name: Scalars['String']
}

export type ResolvePositions = {
  __typename?: 'ResolvePositions'
  alterations: Scalars['String']
  createdAt: Scalars['DateTime']
  desiredEducation?: Maybe<Scalars['String']>
  desiredExperience?: Maybe<Scalars['String']>
  desiredQualifications?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  requiredEducation?: Maybe<Scalars['String']>
  requiredExperience?: Maybe<Scalars['String']>
  requiredQualifications?: Maybe<Scalars['String']>
  revisionAt: Scalars['DateTime']
  version: Scalars['Int']
}

export type ResolveUnit = {
  __typename?: 'ResolveUnit'
  email?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  phone?: Maybe<Scalars['String']>
}

export type Unit = {
  __typename?: 'Unit'
  collaborators?: Maybe<Array<ResolveCollaborators>>
  departments?: Maybe<Array<ResolveDepartments>>
  email?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  phone?: Maybe<Scalars['String']>
}

export type UpdateCollaboratorInput = {
  departmentId?: InputMaybe<Scalars['Int']>
  email?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
  positionId?: InputMaybe<Scalars['Int']>
  unitId?: InputMaybe<Scalars['Int']>
}

export type UpdateDepartmentInput = {
  email?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  initials?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  unitId?: InputMaybe<Scalars['Int']>
}

export type UpdatePositionCategoryInput = {
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
}

export type UpdatePositionInput = {
  alterations?: InputMaybe<Scalars['String']>
  desiredEducation?: InputMaybe<Scalars['String']>
  desiredExperience?: InputMaybe<Scalars['String']>
  desiredQualifications?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  positionCategoryId?: InputMaybe<Scalars['Int']>
  requiredEducation?: InputMaybe<Scalars['String']>
  requiredExperience?: InputMaybe<Scalars['String']>
  requiredQualifications?: InputMaybe<Scalars['String']>
  revisionAt?: InputMaybe<Scalars['DateTime']>
  version?: InputMaybe<Scalars['Int']>
}

export type UpdateUnitInput = {
  email?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  phone?: InputMaybe<Scalars['String']>
}

export type CreateDepartmentMutationVariables = Exact<{
  createDepartmentInput: CreateDepartmentInput
}>

export type CreateDepartmentMutation = {
  __typename?: 'Mutation'
  createDepartment: {
    __typename?: 'Department'
    id: number
    name: string
    createdAt: any
    email?: string | null
    initials?: string | null
    unit?: { __typename?: 'ResolveUnit'; name: string } | null
  }
}

export type CreatePositionMutationVariables = Exact<{
  createPositionInput: CreatePositionInput
}>

export type CreatePositionMutation = {
  __typename?: 'Mutation'
  createPosition: {
    __typename?: 'Position'
    id: number
    name: string
    version: number
    revisionAt: any
    alterations: string
  }
}

export type CreateUnitMutationVariables = Exact<{
  createUnitInput: CreateUnitInput
}>

export type CreateUnitMutation = {
  __typename?: 'Mutation'
  createUnit: {
    __typename?: 'Unit'
    id: number
    name: string
    phone?: string | null
    email?: string | null
  }
}

export type GetDepartmentsQueryVariables = Exact<{ [key: string]: never }>

export type GetDepartmentsQuery = {
  __typename?: 'Query'
  departments: Array<{
    __typename?: 'Department'
    id: number
    initials?: string | null
    name: string
    email?: string | null
    unit?: { __typename?: 'ResolveUnit'; name: string } | null
  }>
}

export type GetPositionsQueryVariables = Exact<{ [key: string]: never }>

export type GetPositionsQuery = {
  __typename?: 'Query'
  positions: Array<{
    __typename?: 'Position'
    id: number
    name: string
    version: number
    revisionAt: any
    positionCategory: { __typename?: 'ResolvePositionCategories'; name: string }
  }>
}

export type GetUnitsQueryVariables = Exact<{ [key: string]: never }>

export type GetUnitsQuery = {
  __typename?: 'Query'
  units: Array<{
    __typename?: 'Unit'
    id: number
    email?: string | null
    name: string
    phone?: string | null
  }>
}

export const CreateDepartmentDocument = gql`
  mutation CreateDepartment($createDepartmentInput: CreateDepartmentInput!) {
    createDepartment(createDepartmentInput: $createDepartmentInput) {
      id
      name
      createdAt
      email
      initials
      unit {
        name
      }
    }
  }
`

export function useCreateDepartmentMutation() {
  return Urql.useMutation<
    CreateDepartmentMutation,
    CreateDepartmentMutationVariables
  >(CreateDepartmentDocument)
}
export const CreatePositionDocument = gql`
  mutation CreatePosition($createPositionInput: CreatePositionInput!) {
    createPosition(createPositionInput: $createPositionInput) {
      id
      name
      version
      revisionAt
      alterations
    }
  }
`

export function useCreatePositionMutation() {
  return Urql.useMutation<
    CreatePositionMutation,
    CreatePositionMutationVariables
  >(CreatePositionDocument)
}
export const CreateUnitDocument = gql`
  mutation CreateUnit($createUnitInput: CreateUnitInput!) {
    createUnit(createUnitInput: $createUnitInput) {
      id
      name
      phone
      email
    }
  }
`

export function useCreateUnitMutation() {
  return Urql.useMutation<CreateUnitMutation, CreateUnitMutationVariables>(
    CreateUnitDocument
  )
}
export const GetDepartmentsDocument = gql`
  query GetDepartments {
    departments {
      id
      initials
      name
      email
      unit {
        name
      }
    }
  }
`

export function useGetDepartmentsQuery(
  options?: Omit<Urql.UseQueryArgs<GetDepartmentsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetDepartmentsQuery, GetDepartmentsQueryVariables>({
    query: GetDepartmentsDocument,
    ...options,
  })
}
export const GetPositionsDocument = gql`
  query GetPositions {
    positions {
      id
      name
      version
      revisionAt
      positionCategory {
        name
      }
    }
  }
`

export function useGetPositionsQuery(
  options?: Omit<Urql.UseQueryArgs<GetPositionsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetPositionsQuery, GetPositionsQueryVariables>({
    query: GetPositionsDocument,
    ...options,
  })
}
export const GetUnitsDocument = gql`
  query GetUnits {
    units {
      id
      email
      name
      phone
    }
  }
`

export function useGetUnitsQuery(
  options?: Omit<Urql.UseQueryArgs<GetUnitsQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetUnitsQuery, GetUnitsQueryVariables>({
    query: GetUnitsDocument,
    ...options,
  })
}
