/*
		ss
		 X               x             .
		 9     .f       !         .    $b
		 4;    $k      /         dH    $f
		 'X   ;$$     z  .       MR   :$
			R   M$$,   :  d9b      M'   tM
			M:  #'$L  ;' M `8      X    MR
			`$;t' $F  # X ,oR      t    Q;
			 $$@  R$ H :RP' $b     X    @'
			 9$E  @Bd' $'   ?X     ;    W
			 `M'  `$M d$    `E    ;.o* :R   ..
				`    '  "'     '    @'   '$o*"'
*/
// Setup logger
var winston = require('winston');
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)
  ]
});
logger.handleExceptions( new winston.transports.Console );
logger.info('Chill, Winston! Everything is being logged.');
module.exports = logger;
