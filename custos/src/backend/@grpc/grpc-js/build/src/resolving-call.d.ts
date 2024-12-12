/// <reference types="node" />
import { CallCredentials } from './call-credentials';
import { Call, CallStreamOptions, InterceptingListener, MessageContext, StatusObject } from './call-interface';
import { Status } from './constants';
import { FilterStackFactory } from './filter-stack';
import { InternalChannel } from './internal-channel';
import { Metadata } from './metadata';
export declare class ResolvingCall implements Call {
    private readonly channel;
    private readonly method;
    private readonly filterStackFactory;
    private credentials;
    private callNumber;
    private child;
    private readPending;
    private pendingMessage;
    private pendingHalfClose;
    private ended;
    private readFilterPending;
    private writeFilterPending;
    private pendingChildStatus;
    private metadata;
    private listener;
    private deadline;
    private host;
    private statusWatchers;
    private deadlineTimer;
    private filterStack;
    private deadlineStartTime;
    private configReceivedTime;
    private childStartTime;
    constructor(channel: InternalChannel, method: string, options: CallStreamOptions, filterStackFactory: FilterStackFactory, credentials: CallCredentials, callNumber: number);
    private trace;
    private runDeadlineTimer;
    private outputStatus;
    private sendMessageOnChild;
    getConfig(): void;
    reportResolverError(status: StatusObject): void;
    cancelWithStatus(status: Status, details: string): void;
    getPeer(): string;
    start(metadata: Metadata, listener: InterceptingListener): void;
    sendMessageWithContext(context: MessageContext, message: Buffer): void;
    startRead(): void;
    halfClose(): void;
    setCredentials(credentials: CallCredentials): void;
    addStatusWatcher(watcher: (status: StatusObject) => void): void;
    getCallNumber(): number;
}
