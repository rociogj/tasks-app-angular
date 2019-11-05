// wildcard module definition to tell the TypeScript compiler how to import *.json
declare module "*.json" {
  const value: any
  export default value
}