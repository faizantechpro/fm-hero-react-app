/**
 * Global Imports
*/

import assert from 'assert';

/**
 * Root Imports
*/

import { DateTimeConfig } from '@config';
import { Chrono, DateTimeMode, DateTimeNameType, DateTimeNameMode, Duration, Day } from '@util/Chrono';

/**
 * Tests
*/

describe('Chrono', function() {

/*
|--------------------------------------------------------------------------
| Chrono.iso()
|--------------------------------------------------------------------------
*/

describe('#iso()', function() {
  const when = new Date('2020-03-10T08:33:57.456Z');
  const knownDateTime = '2020-03-10T08:33:57.456Z';
  const knownDate = '2020-03-10';
  const knownTime = 'T08:33:57.456Z';

  it('returns datetime formatted in ISO-8601', function() {
    assert.deepStrictEqual(
      Chrono.iso(when, DateTimeMode.DateTime),
      knownDateTime,
    );
  });

  it('returns date formatted in ISO-8601', function() {
    assert.deepStrictEqual(
      Chrono.iso(when, DateTimeMode.Date),
      knownDate,
    );
  });

  it('returns time formatted in ISO-8601', function() {
    assert.deepStrictEqual(
      Chrono.iso(when, DateTimeMode.Time),
      knownTime,
    );
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.sql()
|--------------------------------------------------------------------------
*/

describe('#sql()', function() {
  const when = new Date('2020-03-10T08:33:57.456Z');
  const knownSafeDateTime = '2020-03-10 08:33:57';
  const knownSafeDate = '2020-03-10';
  const knownSafeTime = '08:33:57';

  it('returns datetime in SQL-safe format', function() {
    assert.deepStrictEqual(
      Chrono.sql(when, DateTimeMode.DateTime),
      knownSafeDateTime,
    );
  });

  it('returns date in SQL-safe format', function() {
    assert.deepStrictEqual(
      Chrono.sql(when, DateTimeMode.Date),
      knownSafeDate,
    );
  });

  it('returns time in SQL-safe format', function() {
    assert.deepStrictEqual(
      Chrono.sql(when, DateTimeMode.Time),
      knownSafeTime,
    );
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.name()
|--------------------------------------------------------------------------
*/

describe('#name()', function() {
  it('returns correct day names', function() {
    const sun = new Date('2020-03-08T08:33:57Z');
    const mon = new Date('2020-03-09T08:33:57Z');
    const tue = new Date('2020-03-10T08:33:57Z');
    const wed = new Date('2020-03-11T08:33:57Z');
    const thu = new Date('2020-03-12T08:33:57Z');
    const fri = new Date('2020-03-13T08:33:57Z');
    const sat = new Date('2020-03-14T08:33:57Z');

    assert.deepStrictEqual(
      [
        Chrono.name(sun, DateTimeNameType.Day, DateTimeNameMode.Short),
        Chrono.name(sun, DateTimeNameType.Day, DateTimeNameMode.Long),
      ],
      DateTimeConfig.day[0],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(mon, DateTimeNameType.Day, DateTimeNameMode.Short),
        Chrono.name(mon, DateTimeNameType.Day, DateTimeNameMode.Long),
      ],
      DateTimeConfig.day[1],
    );

    assert.deepStrictEqual(
      DateTimeConfig.day[2],
      [
        Chrono.name(tue, DateTimeNameType.Day, DateTimeNameMode.Short),
        Chrono.name(tue, DateTimeNameType.Day, DateTimeNameMode.Long),
      ]
    );

    assert.deepStrictEqual(
      [
        Chrono.name(wed, DateTimeNameType.Day, DateTimeNameMode.Short),
        Chrono.name(wed, DateTimeNameType.Day, DateTimeNameMode.Long),
      ],
      DateTimeConfig.day[3],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(thu, DateTimeNameType.Day, DateTimeNameMode.Short),
        Chrono.name(thu, DateTimeNameType.Day, DateTimeNameMode.Long),
      ],
      DateTimeConfig.day[4],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(fri, DateTimeNameType.Day, DateTimeNameMode.Short),
        Chrono.name(fri, DateTimeNameType.Day, DateTimeNameMode.Long),
      ],
      DateTimeConfig.day[5],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(sat, DateTimeNameType.Day, DateTimeNameMode.Short),
        Chrono.name(sat, DateTimeNameType.Day, DateTimeNameMode.Long),
      ],
      DateTimeConfig.day[6],
    );
  });

  it('returns correct month names', function() {
    const jan = new Date('2020-01-08T08:33:57Z');
    const feb = new Date('2020-02-08T08:33:57Z');
    const mar = new Date('2020-03-08T08:33:57Z');
    const apr = new Date('2020-04-08T08:33:57Z');
    const may = new Date('2020-05-08T08:33:57Z');
    const jun = new Date('2020-06-08T08:33:57Z');
    const jul = new Date('2020-07-08T08:33:57Z');
    const aug = new Date('2020-08-08T08:33:57Z');
    const sep = new Date('2020-09-08T08:33:57Z');
    const oct = new Date('2020-10-08T08:33:57Z');
    const nov = new Date('2020-11-08T08:33:57Z');
    const dec = new Date('2020-12-08T08:33:57Z');

    assert.deepStrictEqual(
      [
        Chrono.name(jan, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(jan, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[0],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(feb, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(feb, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[1],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(mar, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(mar, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[2],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(apr, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(apr, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[3],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(may, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(may, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[4],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(jun, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(jun, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[5],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(jul, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(jul, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[6],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(aug, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(aug, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[7],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(sep, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(sep, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[8],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(oct, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(oct, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[9],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(nov, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(nov, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[10],
    );

    assert.deepStrictEqual(
      [
        Chrono.name(dec, DateTimeNameType.Month, DateTimeNameMode.Short),
        Chrono.name(dec, DateTimeNameType.Month, DateTimeNameMode.Long),
      ],
      DateTimeConfig.month[11],
    );
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.milliseconds()
|--------------------------------------------------------------------------
*/

describe('#milliseconds()', function() {
  // ms -> ms

  it('returns 1 millisecond in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(1, Duration.Millisecond), 1);
  });

  it('returns 6,580,937 milliseconds in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(6580937, Duration.Millisecond), 6580937);
  });

  // sec -> ms

  it('returns 1 second in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(1, Duration.Second), 1000);
  });

  it('returns 591 seconds in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(591, Duration.Second), 1000 * 591);
  });

  // min -> ms

  it('returns 1 minute in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(1, Duration.Minute), 60000);
  });

  it('returns 7,531 minutes in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(7531, Duration.Minute), 60000 * 7531);
  });

  // hour -> ms

  it('returns 1 hour in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(1, Duration.Hour), 3600000);
  });

  it('returns 454 hours in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(454, Duration.Hour), 3600000 * 454);
  });

  // day -> ms

  it('returns 1 day in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(1, Duration.Day), 86400000);
  });

  it('returns 87 days in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(87, Duration.Day), 86400000 * 87);
  });

  // week -> ms

  it('returns 1 week in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(1, Duration.Week), 604800000);
  });

  it('returns 635 weeks in milliseconds', function() {
    assert.strictEqual(Chrono.milliseconds(635, Duration.Week), 604800000 * 635);
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.convert()
|--------------------------------------------------------------------------
*/

describe('#convert()', function() {
  it('returns 8,753 milliseconds in seconds', function() {
    assert.strictEqual(Chrono.convert(8753, Duration.Millisecond, Duration.Second), 8.753);
  });

  it('returns 11 days in minutes', function() {
    assert.strictEqual(Chrono.convert(11, Duration.Day, Duration.Minute), 11 * 24 * 60);
  });

  it('returns 9,351 weeks in hours', function() {
    assert.strictEqual(Chrono.convert(9351, Duration.Week, Duration.Hour), 24 * 7 * 9351);
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.parse()
|--------------------------------------------------------------------------
*/

describe('#parse()', function() {
  it('returns correctly parsed date', function() {
    assert.deepStrictEqual(Chrono.parse('1985-08-27'), {
      year: 1985,
      month: 7,
      day: 27,
    });
  });

  it('returns correctly parsed time', function() {
    assert.deepStrictEqual(Chrono.parse('15:48:13'), {
      hour: 15,
      minute: 48,
      second: 13,
    });
  });

  it('returns correctly parsed datetime', function() {
    assert.deepStrictEqual(Chrono.parse('2005-01-25 03:45:05'), {
      year: 2005,
      month: 0,
      day: 25,
      hour: 3,
      minute: 45,
      second: 5,
    });
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.from()
|--------------------------------------------------------------------------
*/

describe('#from()', function() {
  it('returns Date object from ISO-8601 string', function() {
    assert.strictEqual(
      Chrono.from('2008-05-22', DateTimeMode.Date).toISOString(),
      new Date(2008, 4, 22).toISOString(),
    );

    assert.strictEqual(
      Chrono.from('04:55:12', DateTimeMode.Time).toISOString(),
      new Date(0, 0, 0, 4, 55, 12).toISOString(),
    );

    assert.strictEqual(
      Chrono.from('1995-01-31 15:22:05', DateTimeMode.DateTime).toISOString(),
      new Date(1995, 0, 31, 15, 22, 5).toISOString(),
    );
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.plus()
|--------------------------------------------------------------------------
*/

describe('#plus()', function() {
  it('returns Date three days from 2014-03-10', function() {
    const then = new Date(2014, 2, 10);
    const daysHence = new Date(then);

    daysHence.setDate(then.getDate() + 3);

    assert.strictEqual(
      Chrono.plus(then, 3, Duration.Day).toISOString(),
      daysHence.toISOString(),
    );
  });

  it('returns Date one-hundred eighty-six days from 2005-11-22', function() {
    const then = new Date(2005, 10, 22);
    const daysHence = new Date(then);

    daysHence.setDate(then.getDate() + 186);

    assert.strictEqual(
      Chrono.plus(then, 186, Duration.Day).toISOString(),
      daysHence.toISOString(),
    );
  });

  it('returns Date two weeks from 1999-12-28', function() {
    const then = new Date(1999, 11, 28);
    const daysHence = new Date(then);

    daysHence.setDate(then.getDate() + 14);

    assert.strictEqual(
      Chrono.plus(then, 2, Duration.Week).toISOString(),
      daysHence.toISOString(),
    );
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.previous()
|--------------------------------------------------------------------------
*/

describe('#previous()', function() {
  it('returns first Monday before 2021-03-19', function() {
    assert.strictEqual(
      Chrono.previous(new Date(2021, 2, 19), Day.Monday).toISOString(),
      new Date(2021, 2, 15).toISOString(),
    );
  });

  it('returns first Thursday before 2021-04-30', function() {
    assert.strictEqual(
      Chrono.previous(new Date(2021, 3, 30), Day.Thursday).toISOString(),
      new Date(2021, 3, 29).toISOString(),
    );
  });

  it('returns first Sunday before 2021-03-01', function() {
    assert.strictEqual(
      Chrono.previous(new Date(2021, 2, 1), Day.Sunday).toISOString(),
      new Date(2021, 1, 28).toISOString(),
    );
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.next()
|--------------------------------------------------------------------------
*/

describe('#next()', function() {
  it('returns first Tuesday after 2021-05-05', function() {
    assert.strictEqual(
      Chrono.next(new Date(2021, 4, 5), Day.Tuesday).toISOString(),
      new Date(2021, 4, 11).toISOString(),
    );
  });

  it('returns first Friday after 2021-06-29', function() {
    assert.strictEqual(
      Chrono.next(new Date(2021, 5, 29), Day.Friday).toISOString(),
      new Date(2021, 6, 2).toISOString(),
    );
  });

  it('returns first Wednesday after 2020-12-31', function() {
    assert.strictEqual(
      Chrono.next(new Date(2020, 11, 31), Day.Wednesday).toISOString(),
      new Date(2021, 0, 6).toISOString(),
    );
  });
});

/*
|--------------------------------------------------------------------------
| Chrono.same()
|--------------------------------------------------------------------------
*/

describe('#same()', function() {
  it('considers given dates equal', function() {
    assert.ok(Chrono.same(new Date(0, 0, 0), new Date(0, 0, 0)));
    assert.ok(Chrono.same(new Date(2020, 5, 22), new Date(2020, 5, 22)));
    assert.ok(Chrono.same(new Date(2020, 5, 22, 5, 22, 11), new Date(0, 0, 0, 5, 22, 11), DateTimeMode.Time));
  });

  it('considers given dates different', function() {
    assert.ok(!Chrono.same(new Date(0, 0, 0), new Date(0, 0, 1)));
    assert.ok(!Chrono.same(new Date(2020, 5, 22, 0, 0, 0), new Date(2020, 5, 22, 0, 0, 1), DateTimeMode.DateTime));
  });
});

});
