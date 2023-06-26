/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace ProjectSubmission {
  export type ProjectStruct = {
    name: string;
    id: BigNumberish;
    approved: boolean;
    index: BigNumberish;
    votes: BigNumberish;
  };

  export type ProjectStructOutput = [
    name: string,
    id: bigint,
    approved: boolean,
    index: bigint,
    votes: bigint
  ] & {
    name: string;
    id: bigint;
    approved: boolean;
    index: bigint;
    votes: bigint;
  };
}

export interface ProjectSubmissionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "approveProject"
      | "approvedProjects"
      | "getApproved"
      | "getPending"
      | "pendingProjects"
      | "projectSubmitted"
      | "projectVote"
      | "setMemberContract"
      | "submitProject"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ProjectApproved"
      | "ProjectSubmitted"
      | "VoteReceived"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "approveProject",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approvedProjects",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproved",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPending",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingProjects",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "projectSubmitted",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "projectVote",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMemberContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "submitProject",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approvedProjects",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPending", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingProjects",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectSubmitted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "projectVote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMemberContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitProject",
    data: BytesLike
  ): Result;
}

export namespace ProjectApprovedEvent {
  export type InputTuple = [
    _approver: AddressLike,
    _name: string,
    _index: BigNumberish
  ];
  export type OutputTuple = [_approver: string, _name: string, _index: bigint];
  export interface OutputObject {
    _approver: string;
    _name: string;
    _index: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProjectSubmittedEvent {
  export type InputTuple = [
    _submittor: AddressLike,
    name: string,
    id: BigNumberish
  ];
  export type OutputTuple = [_submittor: string, name: string, id: bigint];
  export interface OutputObject {
    _submittor: string;
    name: string;
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VoteReceivedEvent {
  export type InputTuple = [_voter: AddressLike, _votes: BigNumberish];
  export type OutputTuple = [_voter: string, _votes: bigint];
  export interface OutputObject {
    _voter: string;
    _votes: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ProjectSubmission extends BaseContract {
  connect(runner?: ContractRunner | null): ProjectSubmission;
  waitForDeployment(): Promise<this>;

  interface: ProjectSubmissionInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  approveProject: TypedContractMethod<
    [_submittor: AddressLike],
    [void],
    "nonpayable"
  >;

  approvedProjects: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, boolean, bigint, bigint] & {
        name: string;
        id: bigint;
        approved: boolean;
        index: bigint;
        votes: bigint;
      }
    ],
    "view"
  >;

  getApproved: TypedContractMethod<
    [],
    [ProjectSubmission.ProjectStructOutput[]],
    "view"
  >;

  getPending: TypedContractMethod<
    [],
    [ProjectSubmission.ProjectStructOutput[]],
    "view"
  >;

  pendingProjects: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, boolean, bigint, bigint] & {
        name: string;
        id: bigint;
        approved: boolean;
        index: bigint;
        votes: bigint;
      }
    ],
    "view"
  >;

  projectSubmitted: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, boolean, bigint, bigint] & {
        name: string;
        id: bigint;
        approved: boolean;
        index: bigint;
        votes: bigint;
      }
    ],
    "view"
  >;

  projectVote: TypedContractMethod<
    [_index: BigNumberish, _votes: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMemberContract: TypedContractMethod<
    [_contract: AddressLike],
    [void],
    "nonpayable"
  >;

  submitProject: TypedContractMethod<
    [_name: string, _id: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "approveProject"
  ): TypedContractMethod<[_submittor: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "approvedProjects"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, boolean, bigint, bigint] & {
        name: string;
        id: bigint;
        approved: boolean;
        index: bigint;
        votes: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getApproved"
  ): TypedContractMethod<[], [ProjectSubmission.ProjectStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getPending"
  ): TypedContractMethod<[], [ProjectSubmission.ProjectStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "pendingProjects"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, boolean, bigint, bigint] & {
        name: string;
        id: bigint;
        approved: boolean;
        index: bigint;
        votes: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "projectSubmitted"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, bigint, boolean, bigint, bigint] & {
        name: string;
        id: bigint;
        approved: boolean;
        index: bigint;
        votes: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "projectVote"
  ): TypedContractMethod<
    [_index: BigNumberish, _votes: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMemberContract"
  ): TypedContractMethod<[_contract: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "submitProject"
  ): TypedContractMethod<
    [_name: string, _id: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ProjectApproved"
  ): TypedContractEvent<
    ProjectApprovedEvent.InputTuple,
    ProjectApprovedEvent.OutputTuple,
    ProjectApprovedEvent.OutputObject
  >;
  getEvent(
    key: "ProjectSubmitted"
  ): TypedContractEvent<
    ProjectSubmittedEvent.InputTuple,
    ProjectSubmittedEvent.OutputTuple,
    ProjectSubmittedEvent.OutputObject
  >;
  getEvent(
    key: "VoteReceived"
  ): TypedContractEvent<
    VoteReceivedEvent.InputTuple,
    VoteReceivedEvent.OutputTuple,
    VoteReceivedEvent.OutputObject
  >;

  filters: {
    "ProjectApproved(address,string,uint256)": TypedContractEvent<
      ProjectApprovedEvent.InputTuple,
      ProjectApprovedEvent.OutputTuple,
      ProjectApprovedEvent.OutputObject
    >;
    ProjectApproved: TypedContractEvent<
      ProjectApprovedEvent.InputTuple,
      ProjectApprovedEvent.OutputTuple,
      ProjectApprovedEvent.OutputObject
    >;

    "ProjectSubmitted(address,string,uint256)": TypedContractEvent<
      ProjectSubmittedEvent.InputTuple,
      ProjectSubmittedEvent.OutputTuple,
      ProjectSubmittedEvent.OutputObject
    >;
    ProjectSubmitted: TypedContractEvent<
      ProjectSubmittedEvent.InputTuple,
      ProjectSubmittedEvent.OutputTuple,
      ProjectSubmittedEvent.OutputObject
    >;

    "VoteReceived(address,uint256)": TypedContractEvent<
      VoteReceivedEvent.InputTuple,
      VoteReceivedEvent.OutputTuple,
      VoteReceivedEvent.OutputObject
    >;
    VoteReceived: TypedContractEvent<
      VoteReceivedEvent.InputTuple,
      VoteReceivedEvent.OutputTuple,
      VoteReceivedEvent.OutputObject
    >;
  };
}
