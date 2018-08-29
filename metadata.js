{
	categorizedComponents: [
		{
			components: [
				{
					documentation: {
						examples: [
							{
								code: '  <Avatar appearance="square" name="large" size="large" presence="online"/>'
							}
						]
					},
					info: {
						dirPath: 'src/Avatar',
						documentation: {
							path: 'src/Avatar/Avatar.md'
						},
						implementation: {
							framework: 'reactjs',
							lang: 'javascript',
							path: 'src/Avatar/Avatar.js'
						},
						presets: [
							{
								path: 'src/Avatar/presets/0-default.json'
							}
						]
					},
					name: 'Avatar',
					presets: [
						{
							elements: {
								avatar1: {
									name: 'Avatar',
									props: {
										appearance: 'square',
										name: 'large',
										presence: 'online',
										size: 'large'
									}
								}
							},
							name: 'default',
							rootId: 'avatar1'
						}
					],
					properties: [
						{
							defaultValue: {
								value: 'circle'
							},
							description: '',
							isRequired: false,
							name: 'appearance',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'circle'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'square'
											}
										}
									]
								}
							}
						},
						{
							defaultValue: {
								value: 'medium'
							},
							description: '',
							isRequired: false,
							name: 'size',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'xsmall'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'small'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'medium'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'large'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'xlarge'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'xxlarge'
											}
										}
									]
								}
							}
						},
						{
							defaultValue: {
								value: true
							},
							description: '',
							isRequired: false,
							name: 'enableTooltip',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'borderColor',
							type: {
								name: 'string',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'href',
							type: {
								name: 'string',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'isActive',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'isDisabled',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'isFocus',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'isHover',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'isSelected',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'name',
							type: {
								name: 'string',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'presence',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'online'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'busy'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'focus'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'offline'
											}
										}
									]
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'src',
							type: {
								name: 'string',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'status',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'approved'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'declined'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'locked'
											}
										}
									]
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'stackIndex',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'target',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: '_blank'
											}
										},
										{
											name: 'literal',
											structure: {
												value: '_self'
											}
										},
										{
											name: 'literal',
											structure: {
												value: '_top'
											}
										},
										{
											name: 'literal',
											structure: {
												value: '_parent'
											}
										}
									]
								}
							}
						}
					]
				},
				{
					documentation: {
						examples: [
							{
								code: '<Button appearance="primary" isDisabled={false} isLoading={false}>Merge</Button>'
							}
						]
					},
					info: {
						dirPath: 'src/Button',
						documentation: {
							path: 'src/Button/Button.md'
						},
						implementation: {
							framework: 'reactjs',
							lang: 'javascript',
							path: 'src/Button/Button.js'
						},
						presets: [
							{
								path: 'src/Button/presets/0-default.json'
							},
							{
								path: 'src/Button/presets/10-secondaryButton.json'
							}
						]
					},
					name: 'Button',
					presets: [
						{
							elements: {
								button1: {
									name: 'Button',
									props: {
										appearance: 'primary',
										autoFocus: false,
										children: 'Merge',
										className: '',
										form: '',
										href: '',
										id: '',
										isDisabled: false,
										isSelected: false,
										shouldFitContainer: false,
										spacing: 'default',
										target: '',
										type: 'button'
									}
								}
							},
							name: 'default',
							rootId: 'button1'
						},
						{
							elements: {
								button2: {
									name: 'Button',
									props: {
										appearance: 'secondary',
										autoFocus: false,
										children: 'Merge',
										className: '',
										form: '',
										href: '',
										id: '',
										isDisabled: false,
										isSelected: false,
										shouldFitContainer: false,
										spacing: 'default',
										target: '',
										type: 'button'
									}
								}
							},
							name: 'secondaryButton',
							rootId: 'button2'
						}
					],
					properties: []
				},
				{
					documentation: {
						examples: [
							{
								code: '<ButtonGroup>\n  <Button appearance="primary">Merge 1</Button>\n  <Button appearance="secondary">Merge 2</Button>\n  <Button appearance="danger">Merge 3</Button>\n  <Button appearance="subtle">Merge 4</Button>\n  <Button appearance="warning">Merge 5</Button>\n  <Button appearance="help">Merge 6</Button>\n  <Button appearance="default">Merge 7</Button>\n  <Button appearance="link">Merge 8</Button>\n  <Button appearance="subtle-link">Merge 9</Button>\n</ButtonGroup>'
							}
						]
					},
					info: {
						dirPath: 'src/ButtonGroup',
						documentation: {
							path: 'src/ButtonGroup/ButtonGroup.md'
						},
						implementation: {
							framework: 'reactjs',
							lang: 'javascript',
							path: 'src/ButtonGroup/ButtonGroup.js'
						},
						presets: [
							{
								path: 'src/ButtonGroup/presets/0-default.json'
							}
						]
					},
					name: 'ButtonGroup',
					presets: [
						{
							elements: {
								buttonGroup1: {
									name: 'ButtonGroup',
									props: {
										appearance: '',
										children: [
											{
												uxpinPresetElementId: 'button1'
											},
											{
												uxpinPresetElementId: 'button2'
											}
										]
									}
								}
							},
							name: 'default',
							rootId: 'buttonGroup1'
						}
					],
					properties: [
						{
							description: '',
							isRequired: false,
							name: 'appearance',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'primary'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'default'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'danger'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'link'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'subtle'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'subtle-link'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'warning'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'help'
											}
										}
									]
								}
							}
						},
						{
							defaultValue: {
								value: 'Test'
							},
							description: '',
							isRequired: false,
							name: 'children',
							type: {
								name: 'node',
								structure: {}
							}
						}
					]
				},
				{
					documentation: {
						examples: [
							{
								code: '<Calendar\n   defaultDisabled={[\'2020-12-04\']}\n   defaultPreviouslySelected={[\'2020-12-06\']}\n   defaultSelected={[\'2020-12-08\']}\n   defaultMonth={12}\n   defaultYear={2020}\n   innerProps={{\n     style: {\n       border: \'1px solid red\',\n       display: \'inline-block\',\n     },\n   }}\n />'
							}
						]
					},
					info: {
						dirPath: 'src/Calendar',
						documentation: {
							path: 'src/Calendar/Calendar.md'
						},
						implementation: {
							framework: 'reactjs',
							lang: 'javascript',
							path: 'src/Calendar/Calendar.js'
						},
						presets: [
							{
								path: 'src/Calendar/presets/0-default.json'
							}
						]
					},
					name: 'Calendar',
					presets: [
						{
							elements: {
								calendar1: {
									name: 'Calendar',
									props: {
										defaultDisabled: [
											'2020-12-04'
										],
										defaultMonth: 12,
										defaultPreviouslySelected: [
											'2020-12-06'
										],
										defaultSelected: [
											'2020-12-08'
										],
										defaultYear: 2020,
										innerProps: {
											style: {
												border: '1px solid red',
												display: 'inline-block'
											}
										}
									}
								}
							},
							name: 'default',
							rootId: 'calendar1'
						}
					],
					properties: [
						{
							description: '',
							isRequired: false,
							name: 'day',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							defaultValue: {
								value: 0
							},
							description: '',
							isRequired: false,
							name: 'defaultDay',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							defaultValue: {
								value: []
							},
							description: '',
							isRequired: false,
							name: 'defaultDisabled',
							type: {
								name: 'typedArray',
								structure: {
									memberType: {
										name: 'string',
										structure: {}
									}
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'defaultMonth',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							defaultValue: {
								value: []
							},
							description: '',
							isRequired: false,
							name: 'defaultPreviouslySelected',
							type: {
								name: 'typedArray',
								structure: {
									memberType: {
										name: 'string',
										structure: {}
									}
								}
							}
						},
						{
							defaultValue: {
								value: []
							},
							description: '',
							isRequired: false,
							name: 'defaultSelected',
							type: {
								name: 'typedArray',
								structure: {
									memberType: {
										name: 'string',
										structure: {}
									}
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'defaultYear',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'disabledArray',
							type: {
								name: 'typedArray',
								structure: {
									memberType: {
										name: 'string',
										structure: {}
									}
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'month',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'previouslySelected',
							type: {
								name: 'typedArray',
								structure: {
									memberType: {
										name: 'string',
										structure: {}
									}
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'selected',
							type: {
								name: 'typedArray',
								structure: {
									memberType: {
										name: 'string',
										structure: {}
									}
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'today',
							type: {
								name: 'string',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'year',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'innerProps',
							type: {
								name: 'object',
								structure: {}
							}
						}
					]
				},
				{
					documentation: {
						examples: [
							{
								code: '      <DynamicTable\n        rowsPerPage={10}\n        defaultPage={1}\n        loadingSpinnerSize="large"\n        isLoading={false}\n        isFixedSize\n        defaultSortKey="term"\n        defaultSortOrder="ASC"\n      />'
							}
						]
					},
					info: {
						dirPath: 'src/DynamicTable',
						documentation: {
							path: 'src/DynamicTable/DynamicTable.md'
						},
						implementation: {
							framework: 'reactjs',
							lang: 'javascript',
							path: 'src/DynamicTable/DynamicTable.js'
						},
						presets: [
							{
								path: 'src/DynamicTable/presets/0-default.json'
							}
						]
					},
					name: 'DynamicTable',
					presets: [
						{
							elements: {
								table1: {
									name: 'Table',
									props: {
										defaultPage: 1,
										defaultSortKey: 'term',
										defaultSortOrder: 'ASC',
										isFixedSize: true,
										isLoading: false,
										loadingSpinnerSize: 'large',
										rowsPerPage: 10
									}
								}
							},
							name: 'default',
							rootId: 'table1'
						}
					],
					properties: [
						{
							defaultValue: {
								value: 1
							},
							description: '',
							isRequired: false,
							name: 'defaultPage',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'defaultSortKey',
							type: {
								name: 'string',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'defaultSortOrder',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'ASC'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'DESC'
											}
										}
									]
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'loadingSpinnerSize',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'small'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'large'
											}
										}
									]
								}
							}
						},
						{
							defaultValue: {
								value: false
							},
							description: '',
							isRequired: false,
							name: 'isLoading',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							defaultValue: {
								value: false
							},
							description: '',
							isRequired: false,
							name: 'isFixedSize',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							defaultValue: {
								value: Infinity
							},
							description: '',
							isRequired: false,
							name: 'rowsPerPage',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'page',
							type: {
								name: 'number',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'sortKey',
							type: {
								name: 'string',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'sortOrder',
							type: {
								name: 'union',
								structure: {
									elements: [
										{
											name: 'literal',
											structure: {
												value: 'ASC'
											}
										},
										{
											name: 'literal',
											structure: {
												value: 'DESC'
											}
										}
									]
								}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'isRankable',
							type: {
								name: 'boolean',
								structure: {}
							}
						},
						{
							description: '',
							isRequired: false,
							name: 'paginationi18n',
							type: {
								name: 'shape',
								structure: {
									next: {
										name: 'string',
										structure: {}
									},
									prev: {
										name: 'string',
										structure: {}
									}
								}
							}
						}
					]
				}
			],
			name: 'General'
		}
	],
	name: ''
}

