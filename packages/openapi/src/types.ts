import { generateDocument } from 'openapi-metadata'

type GenerateDocumentParameters = Parameters<typeof generateDocument>[0]

export type OpenAPIConfig = {
  /**
   * Base OpenAPI document.
   * It gets deeply merged into the generated OpenAPI document
   * allowing you to extend the final document.
   */
  document: GenerateDocumentParameters['document']

  /**
   * User interface integration to use.
   */
  ui: 'scalar' | 'swagger' | 'rapidoc'

  /**
   * Additional controllers to load into your schema.
   */
  controllers?: GenerateDocumentParameters['controllers']

  /**
   * Custom type loaders.
   *
   * @see https://openapi-ts.pages.dev/openapi-metadata/type-loader
   */
  loaders?: GenerateDocumentParameters['loaders']

  /**
   * Customize the default OpenAPI behavior.
   */
  defaults?: OpenAPIDefaults
}

export type OpenAPIDefaults = {
  /**
   * Configures the default tagging behavior for operations discovered in the
   * AdonisJS controllers.
   *
   * - `always`: Always tag the operation with the controller name. This is the default behavior.
   * - `never`: Never tag the operation with the controller name.
   *
   * @default "always"
   */
  controllerNameAsTag: 'always' | 'never'
}
