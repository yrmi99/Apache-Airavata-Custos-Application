import * as jspb from 'google-protobuf'



export class UserProfile extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): UserProfile;

  getFirstname(): string;
  setFirstname(value: string): UserProfile;

  getLastname(): string;
  setLastname(value: string): UserProfile;

  getEmail(): string;
  setEmail(value: string): UserProfile;

  getCreationdate(): string;
  setCreationdate(value: string): UserProfile;

  getRole(): string;
  setRole(value: string): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: UserProfile): UserProfile.AsObject;
  static serializeBinaryToWriter(message: UserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserProfile;
  static deserializeBinaryFromReader(message: UserProfile, reader: jspb.BinaryReader): UserProfile;
}

export namespace UserProfile {
  export type AsObject = {
    userid: string,
    firstname: string,
    lastname: string,
    email: string,
    creationdate: string,
    role: string,
  }
}

export class Group extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): Group;

  getName(): string;
  setName(value: string): Group;

  getDescription(): string;
  setDescription(value: string): Group;

  getScopesList(): Array<string>;
  setScopesList(value: Array<string>): Group;
  clearScopesList(): Group;
  addScopes(value: string, index?: number): Group;

  getMembersList(): Array<UserProfile>;
  setMembersList(value: Array<UserProfile>): Group;
  clearMembersList(): Group;
  addMembers(value?: UserProfile, index?: number): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    groupid: string,
    name: string,
    description: string,
    scopesList: Array<string>,
    membersList: Array<UserProfile.AsObject>,
  }
}

export class UserRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): UserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
  static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRequest;
  static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GroupRequest extends jspb.Message {
  getGroupid(): string;
  setGroupid(value: string): GroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GroupRequest): GroupRequest.AsObject;
  static serializeBinaryToWriter(message: GroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupRequest;
  static deserializeBinaryFromReader(message: GroupRequest, reader: jspb.BinaryReader): GroupRequest;
}

export namespace GroupRequest {
  export type AsObject = {
    groupid: string,
  }
}

export class UserList extends jspb.Message {
  getUsersList(): Array<UserProfile>;
  setUsersList(value: Array<UserProfile>): UserList;
  clearUsersList(): UserList;
  addUsers(value?: UserProfile, index?: number): UserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserList.AsObject;
  static toObject(includeInstance: boolean, msg: UserList): UserList.AsObject;
  static serializeBinaryToWriter(message: UserList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserList;
  static deserializeBinaryFromReader(message: UserList, reader: jspb.BinaryReader): UserList;
}

export namespace UserList {
  export type AsObject = {
    usersList: Array<UserProfile.AsObject>,
  }
}

export class GroupList extends jspb.Message {
  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): GroupList;
  clearGroupsList(): GroupList;
  addGroups(value?: Group, index?: number): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupList.AsObject;
  static toObject(includeInstance: boolean, msg: GroupList): GroupList.AsObject;
  static serializeBinaryToWriter(message: GroupList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupList;
  static deserializeBinaryFromReader(message: GroupList, reader: jspb.BinaryReader): GroupList;
}

export namespace GroupList {
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

