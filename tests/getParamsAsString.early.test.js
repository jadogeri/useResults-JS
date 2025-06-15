
import { getParamsAsString } from '../src/getParamsAsString';


// src/getParamsAsString.test.js
describe('getParamsAsString() getParamsAsString method', () => {
  
  // Happy path tests
  describe('Happy Paths', () => {
    
    test('should return a query string with a single parameter', () => {
      const queryParams = { key: 'value' };
      const result = getParamsAsString(queryParams);
      expect(result).toBe('?key=value');
    });

    test('should return a query string with multiple parameters', () => {
      const queryParams = { key1: 'value1', key2: 'value2' };
      const result = getParamsAsString(queryParams);
      expect(result).toBe('?key1=value1&key2=value2');
    });

    test('should handle parameters with special characters', () => {
      const queryParams = { 'key@': 'value#' };
      const result = getParamsAsString(queryParams);
      expect(result).toBe('?key%40=value%23');
    });

    test('should return an empty query string for an empty object', () => {
      const queryParams = {};
      const result = getParamsAsString(queryParams);
      expect(result).toBe('?');
    });

  });

  // Edge case tests
  describe('Edge Cases', () => {
    
    test('should return an empty string for null input', () => {
      const queryParams = null;
      const result = getParamsAsString(queryParams);
      expect(result).toBe('');
    });

    test('should return an empty string for undefined input', () => {
      const queryParams = undefined;
      const result = getParamsAsString(queryParams);
      expect(result).toBe('');
    });

    test('should handle numeric values correctly', () => {
      const queryParams = { key: 123 };
      const result = getParamsAsString(queryParams);
      expect(result).toBe('?key=123');
    });

    test('should handle boolean values correctly', () => {
      const queryParams = { key: true };
      const result = getParamsAsString(queryParams);
      expect(result).toBe('?key=true');
    });

    test('should handle array values correctly', () => {
      const queryParams = { key: ['value1', 'value2'] };
      const result = getParamsAsString(queryParams);
      expect(result).toBe('?key=value1%2Cvalue2');
    });

  });

});