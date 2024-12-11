import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb';


export class Group extends jspb.Message {
  getId(): string;
  setId(value: string): Group;

  getName(): string;
  setName(value: string): Group;

  getUsersList(): Array<user_pb.User>;
  setUsersList(value: Array<user_pb.User>): Group;
  clearUsersList(): Group;
  addUsers(value?: user_pb.User, index?: number): user_pb.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    id: string,
    name: string,
    usersList: Array<user_pb.User.AsObject>,
  }
}

export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateGroupRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): CreateGroupRequest;
  clearUserIdsList(): CreateGroupRequest;
  addUserIds(value: string, index?: number): CreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    name: string,
    userIdsList: Array<string>,
  }
}

export class GroupResponse extends jspb.Message {
  getGroup(): Group | undefined;
  setGroup(value?: Group): GroupResponse;
  hasGroup(): boolean;
  clearGroup(): GroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupResponse): GroupResponse.AsObject;
  static serializeBinaryToWriter(message: GroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupResponse;
  static deserializeBinaryFromReader(message: GroupResponse, reader: jspb.BinaryReader): GroupResponse;
}

export namespace GroupResponse {
  export type AsObject = {
    group?: Group.AsObject,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateGroupRequest;

  getName(): string;
  setName(value: string): UpdateGroupRequest;

  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): UpdateGroupRequest;
  clearUserIdsList(): UpdateGroupRequest;
  addUserIds(value: string, index?: number): UpdateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
  static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
  export type AsObject = {
    id: string,
    name: string,
    userIdsList: Array<string>,
  }
}

export class DeleteGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteGroupResponse extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupResponse): DeleteGroupResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupResponse;
  static deserializeBinaryFromReader(message: DeleteGroupResponse, reader: jspb.BinaryReader): DeleteGroupResponse;
}

export namespace DeleteGroupResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupRequest): GetGroupRequest.AsObject;
  static serializeBinaryToWriter(message: GetGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupRequest;
  static deserializeBinaryFromReader(message: GetGroupRequest, reader: jspb.BinaryReader): GetGroupRequest;
}

export namespace GetGroupRequest {
  export type AsObject = {
    id: string,
  }
}

export class ListGroupsResponse extends jspb.Message {
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): ListGroupsResponse;
  clearGroupsList(): ListGroupsResponse;
  addGroups(value?: Group, index?: number): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGroupsResponse): ListGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: ListGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGroupsResponse;
  static deserializeBinaryFromReader(message: ListGroupsResponse, reader: jspb.BinaryReader): ListGroupsResponse;
}

export namespace ListGroupsResponse {
  export type AsObject = {
    groupsList: Array<Group.AsObject>,
  }
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

