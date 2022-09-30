/**
 * Global Imports
*/

import assert from 'assert';

/**
 * Root Imports
*/

import { Str } from '@util';

/**
 * Tests
*/

describe('Str', function() {

/*
|--------------------------------------------------------------------------
| Str.count()
|--------------------------------------------------------------------------
*/

describe('#count()', function() {
  it('returns 3', function() {
    assert.strictEqual(3, Str.count('foo one bar two foo three foo four bar', 'foo'));
  });

  it('returns 5', function() {
    assert.strictEqual(5, Str.count('foo one bar two foo three foo four bar', ['foo', 'bar']));
  });
});

/*
|--------------------------------------------------------------------------
| Str.start()
|--------------------------------------------------------------------------
*/

describe('#start()', function() {
  it('returns string with given prefix', function() {
    assert.strictEqual('foobar', Str.start('bar', 'foo'));
  });

  it('returns string unchanged', function() {
    assert.strictEqual('', Str.start('', 'bar'));
    assert.strictEqual('bar', Str.start('bar', ''));
    assert.strictEqual('bar', Str.start('bar', 'bar'));
  });
});

/*
|--------------------------------------------------------------------------
| Str.finish()
|--------------------------------------------------------------------------
*/

describe('#finish()', function() {
  it('returns string with given suffix', function() {
    assert.strictEqual('barfoo', Str.finish('bar', 'foo'));
  });

  it('returns string unchanged', function() {
    assert.strictEqual('', Str.finish('', 'foo'));
    assert.strictEqual('foo', Str.finish('foo', ''));
    assert.strictEqual('foo', Str.finish('foo', 'foo'));
  });
});

/*
|--------------------------------------------------------------------------
| Str.singular()
|--------------------------------------------------------------------------
*/

describe('#singular()', function() {
  it('returns apples in singular', function() {
    assert.strictEqual('apple', Str.singular('apples'));
  });

  it('returns boats in singular', function() {
    assert.strictEqual('boat', Str.singular('boats'));
  });

  it('returns fairies in singular', function() {
    assert.strictEqual('fairy', Str.singular('fairies'));
  });

  it('returns string unchanged', function() {
    assert.strictEqual('foo', Str.singular('foo'));
    assert.strictEqual('this is not a plural word', Str.singular('this is not a plural word'));
  });
});

/*
|--------------------------------------------------------------------------
| Str.plural()
|--------------------------------------------------------------------------
*/

describe('#plural()', function() {
  it('returns dog in plural', function() {
    assert.strictEqual('dogs', Str.plural('dog'));
  });

  it('returns cat in plural', function() {
    assert.strictEqual('cats', Str.plural('cat'));
  });

  it('returns factory in plural', function() {
    assert.strictEqual('factories', Str.plural('factory'));
  });

  it('returns string unchanged', function() {
    assert.strictEqual('foos', Str.plural('foos'));
    assert.strictEqual('this has many words', Str.plural('this has many words'));
  });
});

/*
|--------------------------------------------------------------------------
| Str.lcfirst()
|--------------------------------------------------------------------------
*/

describe('#lcfirst()', function() {
  it('returns John with lowercase "j"', function() {
    assert.strictEqual('john', Str.lcfirst('John'));
  });

  it('returns Doe with lowercase "d"', function() {
    assert.strictEqual('doe', Str.lcfirst('Doe'));
  });

  it('returns strings unchanged', function() {
    assert.strictEqual('john doe', Str.lcfirst('john doe'));
    assert.strictEqual('12345', Str.lcfirst('12345'));
  });
});

/*
|--------------------------------------------------------------------------
| Str.ucfirst()
|--------------------------------------------------------------------------
*/

describe('#ucfirst()', function() {
  it('returns john with capital "J"', function() {
    assert.strictEqual('John', Str.ucfirst('john'));
  });

  it('returns doe with capital "D"', function() {
    assert.strictEqual('Doe', Str.ucfirst('doe'));
  });

  it('returns strings unchanged', function() {
    assert.strictEqual('John Doe', Str.ucfirst('John Doe'));
    assert.strictEqual('12345', Str.ucfirst('12345'));
  });
});

/*
|--------------------------------------------------------------------------
| Str.matches()
|--------------------------------------------------------------------------
*/

describe('#matches()', function() {
  it('finds matches', function() {
    assert.ok(Str.matches('foo', 'f*'));
    assert.ok(Str.matches('hello world', 'hello world'));
    assert.ok(Str.matches('hello world', 'hello*wo*rld'));
  });

  it('does not find matches', function() {
    assert.ok(!Str.matches('foo', 'f'));
    assert.ok(!Str.matches('hello world', 'hello*wo rld'));
  });
});

/*
|--------------------------------------------------------------------------
| Str.contains()
|--------------------------------------------------------------------------
*/

describe('#contains()', function() {
  it('find matches', function() {
    assert.ok(Str.contains('foo', 'f'));
    assert.ok(Str.contains('foo', 'o'));
    assert.ok(Str.contains('foo', ['f', 'o']));
  });

  it('does not find matches', function() {
    assert.ok(!Str.contains('foo', 'b'));
    assert.ok(!Str.contains('foo', ['f', 'o', 'b']));
  });
});

/*
|--------------------------------------------------------------------------
| Str.limit()
|--------------------------------------------------------------------------
*/

describe('#limit()', function() {
  it('returns string with suffix', function() {
    assert.strictEqual('heworld', Str.limit('hello', 2, 'world'));
    assert.strictEqual('helloworld', Str.limit('hello goodbye', 5, 'world'));
  });

  it('returns string unchanged', function() {
    assert.strictEqual('', Str.limit('', 0, 'world'));
    assert.strictEqual('hello', Str.limit('hello', 5, 'world'));
  });
});

});
