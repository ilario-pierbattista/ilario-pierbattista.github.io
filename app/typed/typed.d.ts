type TypedGlobalType = (opts: any) => void;

interface TypedGlobalInterface {
    new: (el: any, opts: any) => void;
}

interface Window {
    Typed: TypedGlobalInterface;
}