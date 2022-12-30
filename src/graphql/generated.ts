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
  documents?: Maybe<Array<ResolveDocuments>>
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

export type CreateDocumentInput = {
  approverAt?: InputMaybe<Scalars['DateTime']>
  approverId?: InputMaybe<Scalars['Int']>
  departmentId: Scalars['Int']
  documentCategoryId: Scalars['Int']
  elaboratorAt?: InputMaybe<Scalars['DateTime']>
  elaboratorId: Scalars['Int']
  fileURL?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  pdfURL?: InputMaybe<Scalars['String']>
  reference?: InputMaybe<Scalars['String']>
  revisorAt?: InputMaybe<Scalars['DateTime']>
  revisorId?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<DocumentStatus>
  unitId: Scalars['Int']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type CreateDocumentsCategoryInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']
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

export type Document = {
  __typename?: 'Document'
  DocumentCategory: ResolveDocumentsCategory
  approver?: Maybe<ResolveCollaborators>
  approverAt?: Maybe<Scalars['DateTime']>
  createdAt: Scalars['DateTime']
  department: ResolveDepartments
  elaborator: ResolveCollaborators
  elaboratorAt?: Maybe<Scalars['DateTime']>
  fileURL?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  pdfURL?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  revisor?: Maybe<ResolveCollaborators>
  revisorAt?: Maybe<Scalars['DateTime']>
  status: DocumentStatus
  unit: ResolveUnit
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum DocumentCodeFormat {
  NumberedByDepartment = 'NUMBERED_BY_DEPARTMENT',
  NumberedSeparatelyByDepartment = 'NUMBERED_SEPARATELY_BY_DEPARTMENT',
  Simple = 'SIMPLE',
}

export enum DocumentStatus {
  Approval = 'APPROVAL',
  Approved = 'APPROVED',
  Elaboration = 'ELABORATION',
  Inative = 'INATIVE',
  Obsolete = 'OBSOLETE',
  Rejected = 'REJECTED',
  Revision = 'REVISION',
}

export enum DocumentType {
  Excel = 'EXCEL',
  Pdf = 'PDF',
  Word = 'WORD',
}

export type DocumentsCategory = {
  __typename?: 'DocumentsCategory'
  codeFormat: DocumentCodeFormat
  createdAt: Scalars['DateTime']
  documentType: DocumentType
  documents?: Maybe<Array<ResolveDocuments>>
  id: Scalars['Int']
  name: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createCollaborator: Collaborator
  createDepartment: Department
  createDocument: Document
  createDocumentsCategory: DocumentsCategory
  createPosition: Position
  createPositionCategory: PositionCategory
  createUnit: Unit
  removeCollaborator: Collaborator
  removeDepartment: Department
  removeDocument: Document
  removeDocumentsCategory: DocumentsCategory
  removePosition: Position
  removePositionCategory: PositionCategory
  removeUnit: Unit
  updateCollaborator: Collaborator
  updateDepartment: Department
  updateDocument: Document
  updateDocumentsCategory: DocumentsCategory
  updatePosition: Position
  updatePositionCategory: PositionCategory
  updateUnit: Unit
}

export type MutationCreateCollaboratorArgs = {
  createCollaboratorInput: CreateCollaboratorInput
}

export type MutationCreateDepartmentArgs = {
  createDepartmentInput: CreateDepartmentInput
}

export type MutationCreateDocumentArgs = {
  createDocumentInput: CreateDocumentInput
}

export type MutationCreateDocumentsCategoryArgs = {
  createDocumentsCategoryInput: CreateDocumentsCategoryInput
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

export type MutationRemoveDocumentArgs = {
  id: Scalars['Int']
}

export type MutationRemoveDocumentsCategoryArgs = {
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

export type MutationUpdateDocumentArgs = {
  updateDocumentInput: UpdateDocumentInput
}

export type MutationUpdateDocumentsCategoryArgs = {
  updateDocumentsCategoryInput: UpdateDocumentsCategoryInput
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
  document: Document
  documents: Array<Document>
  documentsCategories: Array<DocumentsCategory>
  documentsCategory: DocumentsCategory
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

export type QueryDocumentArgs = {
  id: Scalars['Int']
}

export type QueryDocumentsCategoryArgs = {
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

export type ResolveDocuments = {
  __typename?: 'ResolveDocuments'
  approverAt?: Maybe<Scalars['DateTime']>
  createdAt: Scalars['DateTime']
  elaboratorAt?: Maybe<Scalars['DateTime']>
  fileURL?: Maybe<Scalars['String']>
  id: Scalars['Int']
  name: Scalars['String']
  pdfURL?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  revisorAt?: Maybe<Scalars['DateTime']>
  status: DocumentStatus
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ResolveDocumentsCategory = {
  __typename?: 'ResolveDocumentsCategory'
  codeFormat: DocumentCodeFormat
  createdAt: Scalars['DateTime']
  documentType: DocumentType
  id: Scalars['Int']
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
  documents?: Maybe<Array<ResolveDocuments>>
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

export type UpdateDocumentInput = {
  approverAt?: InputMaybe<Scalars['DateTime']>
  approverId?: InputMaybe<Scalars['Int']>
  departmentId?: InputMaybe<Scalars['Int']>
  documentCategoryId?: InputMaybe<Scalars['Int']>
  elaboratorAt?: InputMaybe<Scalars['DateTime']>
  elaboratorId?: InputMaybe<Scalars['Int']>
  fileURL?: InputMaybe<Scalars['String']>
  id: Scalars['Int']
  name?: InputMaybe<Scalars['String']>
  pdfURL?: InputMaybe<Scalars['String']>
  reference?: InputMaybe<Scalars['String']>
  revisorAt?: InputMaybe<Scalars['DateTime']>
  revisorId?: InputMaybe<Scalars['Int']>
  status?: InputMaybe<DocumentStatus>
  unitId?: InputMaybe<Scalars['Int']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type UpdateDocumentsCategoryInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>
  id: Scalars['Int']
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
